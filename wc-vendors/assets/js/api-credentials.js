/**
 * Vendor dashboard API credential control.
 *
 * Talks only to the WordPress core Application Passwords REST route. The
 * one-per-vendor cap is enforced server-side by WCV_REST_App_Password_Cap.
 *
 * @package WCVendors
 * @since   2.7.3
 */
;(function() {
  'use strict'

  var cfg = window.wcvApiCredentials
  if (!cfg) {
    return
  }

  var root = document.getElementById('wcv-api-credentials')
  if (!root) {
    return
  }

  var $ = function(sel) {
    return root.querySelector(sel)
  }

  var els = {
    introEmpty: $('.wcv-api-intro-empty'),
    introExists: $('.wcv-api-intro-exists'),
    empty: $('.wcv-api-empty'),
    generate: $('.wcv-api-generate'),
    generated: $('.wcv-api-generated'),
    secret: $('.wcv-api-secret'),
    copy: $('.wcv-api-copy'),
    error: $('.wcv-api-error'),
    details: $('.wcv-api-details'),
    name: $('.wcv-api-name'),
    created: $('.wcv-api-created'),
    lastUsed: $('.wcv-api-last-used'),
    actions: $('.wcv-api-actions'),
    regenerate: $('.wcv-api-regenerate'),
    modal: $('.wcv-api-modal'),
    modalCancel: $('.wcv-api-modal-cancel'),
    modalConfirm: $('.wcv-api-modal-confirm'),
    revoke: $('.wcv-api-modal-revoke'),
    revokeIntro: $('.wcv-api-modal-revoke-intro'),
    revokeList: $('.wcv-api-modal-revoke-list')
  }

  function show(el) {
    if (el) {
      el.hidden = false
    }
  }

  function hide(el) {
    if (el) {
      el.hidden = true
    }
  }

  function setBusy(el, busy) {
    if (!el) {
      return
    }
    el.disabled = busy
  }

  function showError(message) {
    if (!els.error) {
      return
    }
    els.error.querySelector('p').textContent = message || cfg.i18n.genericError
    show(els.error)
  }

  function clearError() {
    hide(els.error)
  }

  /**
   * Create an Application Password through the core REST route.
   *
   * @return {Promise<Object>} Resolves with the created credential item.
   */
  function createPassword() {
    return fetch(cfg.restUrl, {
      method: 'POST',
      credentials: 'same-origin',
      headers: {
        'Content-Type': 'application/json',
        'X-WP-Nonce': cfg.nonce
      },
      body: JSON.stringify({ name: cfg.appName })
    }).then(parseResponse)
  }

  /**
   * Delete the current Application Password.
   *
   * @param {string} uuid The credential UUID.
   * @return {Promise}
   */
  function deletePassword(uuid) {
    return fetch(cfg.restUrl + '/' + encodeURIComponent(uuid), {
      method: 'DELETE',
      credentials: 'same-origin',
      headers: {
        'X-WP-Nonce': cfg.nonce
      }
    }).then(parseResponse)
  }

  /**
   * List every Application Password the vendor holds.
   *
   * @return {Promise<Array>} Resolves with the credential items.
   */
  function listPasswords() {
    return fetch(cfg.restUrl, {
      method: 'GET',
      credentials: 'same-origin',
      headers: {
        'X-WP-Nonce': cfg.nonce
      }
    }).then(parseResponse)
  }

  function parseResponse(response) {
    return response.json().then(function(body) {
      if (!response.ok) {
        var error = new Error(
          body && body.message ? body.message : cfg.i18n.genericError
        )
        error.code = body && body.code ? body.code : ''
        throw error
      }
      return body
    })
  }

  /**
   * Render the freshly generated credential: reveal the secret, fill the
   * details, and switch to the generated view.
   *
   * @param {Object} item The core REST response for the new credential.
   */
  function renderGenerated(item) {
    els.secret.value = item.password || ''
    els.name.textContent = item.name || cfg.appName
    els.created.textContent = cfg.todayFormatted
    els.lastUsed.textContent = cfg.neverLabel

    cfg.credential = {
      uuid: item.uuid,
      name: item.name,
      uuids: [item.uuid],
      names: [item.name || cfg.appName]
    }

    hide(els.introEmpty)
    hide(els.introExists)
    hide(els.empty)
    hide(els.actions)
    show(els.generated)
    show(els.details)

    if (els.copy) {
      els.copy.textContent = cfg.i18n.copy
    }

    // The clicked button's container is now hidden, so move focus to the
    // secret the vendor has to copy.
    els.secret.focus()
  }

  /**
   * Format a core REST date for display.
   *
   * @param {?string} value The credential date, in UTC ISO 8601.
   * @return {string} The display value.
   */
  function formatDate(value) {
    if (!value) {
      return cfg.neverLabel
    }

    var date = new Date(value + 'Z')

    return isNaN(date.getTime()) ? value : date.toLocaleDateString()
  }

  /**
   * Render the steady state from the server's credential list.
   *
   * @param {Array} items The core REST credential items.
   */
  function renderExisting(items) {
    var first = items[0]

    cfg.credential = {
      uuid: first.uuid,
      name: first.name,
      uuids: items.map(function(item) {
        return item.uuid
      }),
      names: items.map(function(item) {
        return item.name || cfg.appName
      })
    }

    els.name.textContent = first.name || cfg.appName
    els.created.textContent = formatDate(first.created)
    els.lastUsed.textContent = formatDate(first.last_used)

    if (els.secret) {
      els.secret.value = ''
    }

    hide(els.generated)
    hide(els.empty)
    hide(els.introEmpty)
    show(els.introExists)
    show(els.details)
    show(els.actions)

    if (els.regenerate) {
      els.regenerate.focus()
    }
  }

  /**
   * Re-render the pane from the server state.
   *
   * A regenerate that fails part way through its deletes leaves an unknown
   * number of credentials behind, so read the truth back instead of assuming.
   *
   * @return {Promise}
   */
  function refreshFromServer() {
    return listPasswords().then(
      function(items) {
        if (items && items.length) {
          renderExisting(items)
        } else {
          resetToEmpty()
        }
      },
      function() {
        resetToEmpty()
      }
    )
  }

  function copySecret() {
    var value = els.secret.value

    var done = function() {
      els.copy.textContent = cfg.i18n.copied
      setTimeout(function() {
        els.copy.textContent = cfg.i18n.copy
      }, 2000)
    }

    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(value).then(done, selectFallback)
    } else {
      selectFallback()
    }
  }

  function selectFallback() {
    els.secret.focus()
    els.secret.select()
    try {
      document.execCommand('copy')
      els.copy.textContent = cfg.i18n.copied
      setTimeout(function() {
        els.copy.textContent = cfg.i18n.copy
      }, 2000)
    } catch (e) {
      showError(cfg.i18n.copyFailed)
    }
  }

  /**
   * Reset the control to the no-credential state.
   *
   * Used when a regenerate deletes the old credential but the new one fails,
   * so the UI never shows a revoked credential as active.
   */
  function resetToEmpty() {
    cfg.credential = null
    if (els.secret) {
      els.secret.value = ''
    }
    hide(els.generated)
    hide(els.details)
    hide(els.actions)
    hide(els.introExists)
    show(els.introEmpty)
    show(els.empty)

    if (els.generate) {
      els.generate.focus()
    }
  }

  var lastFocused = null

  /**
   * List the credentials a regenerate revokes, when the vendor holds more than
   * one. The pane shows only the first, so the extras are otherwise invisible.
   */
  function renderRevokeList() {
    if (!els.revoke || !els.revokeList) {
      return
    }

    var names =
      cfg.credential && cfg.credential.names ? cfg.credential.names : []

    els.revokeList.textContent = ''

    if (names.length < 2) {
      hide(els.revoke)
      return
    }

    if (els.revokeIntro) {
      els.revokeIntro.textContent = cfg.i18n.revokeIntro
    }

    names.forEach(function(name) {
      var item = document.createElement('li')
      item.textContent = name || cfg.appName
      els.revokeList.appendChild(item)
    })

    show(els.revoke)
  }

  function openModal() {
    lastFocused = document.activeElement
    setBusy(els.modalConfirm, false)
    renderRevokeList()
    show(els.modal)
    if (els.modalCancel) {
      els.modalCancel.focus()
    }
    document.addEventListener('keydown', onModalKeydown)
  }

  function closeModal() {
    hide(els.modal)
    document.removeEventListener('keydown', onModalKeydown)
    if (lastFocused && typeof lastFocused.focus === 'function') {
      lastFocused.focus()
    }
  }

  function onModalKeydown(e) {
    if ('Escape' === e.key) {
      e.preventDefault()
      closeModal()
      return
    }

    if ('Tab' !== e.key) {
      return
    }

    var focusables = [els.modalCancel, els.modalConfirm].filter(Boolean)
    if (!focusables.length) {
      return
    }

    var first = focusables[0]
    var last = focusables[focusables.length - 1]

    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault()
      last.focus()
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault()
      first.focus()
    }
  }

  // Generate.
  if (els.generate) {
    els.generate.addEventListener('click', function() {
      clearError()
      setBusy(els.generate, true)
      createPassword()
        .then(function(item) {
          renderGenerated(item)
        })
        .catch(function(error) {
          showError(error.message)
        })
        .then(function() {
          setBusy(els.generate, false)
        })
    })
  }

  // Copy.
  if (els.copy) {
    els.copy.addEventListener('click', copySecret)
  }

  // Regenerate: open the confirmation modal.
  if (els.regenerate) {
    els.regenerate.addEventListener('click', function() {
      clearError()
      openModal()
    })
  }

  if (els.modalCancel) {
    els.modalCancel.addEventListener('click', closeModal)
  }

  // Confirm regenerate: delete the old credential, then create a new one.
  if (els.modalConfirm) {
    els.modalConfirm.addEventListener('click', function() {
      var current = cfg.credential
      if (!current || !current.uuid) {
        closeModal()
        return
      }

      // Delete every existing credential so the new one is the only one,
      // matching the one-credential model the pane presents even when the
      // vendor holds legacy passwords created outside this UI. The deletes
      // run in sequence: all passwords share one user-meta row, so parallel
      // deletes race and lose writes.
      var uuids =
        current.uuids && current.uuids.length ? current.uuids : [current.uuid]
      var deleted = false

      setBusy(els.modalConfirm, true)
      uuids
        .reduce(function(chain, uuid) {
          return chain.then(function() {
            return deletePassword(uuid).then(function() {
              deleted = true
            })
          })
        }, Promise.resolve())
        .then(function() {
          return createPassword()
        })
        .then(function(item) {
          closeModal()
          renderGenerated(item)
        })
        .catch(function(error) {
          closeModal()
          if (deleted) {
            // At least one credential is gone but the new one failed. Re-read
            // the server so the pane never shows a revoked credential as
            // active, nor offers a Generate the cap would reject.
            return refreshFromServer().then(function() {
              showError(cfg.i18n.regenFailed)
            })
          }
          showError(error.message)
        })
        .then(function() {
          setBusy(els.modalConfirm, false)
        })
    })
  }
})()

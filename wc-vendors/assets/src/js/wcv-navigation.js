(function($, Ink) {
  $(document).ready(function($) {
    $(document).on('click', '.wcv-shade.wcv-fade.visible', function(event) {
      if (event.target.closest('.wcv-modal')) {
        return;
      }

      const modalElement = $(this).find('.wcv-modal')[0];
      if (!modalElement) {
        return;
      }

      try {
        const modal = Ink.UI.Modal_1.getInstance(modalElement);
        if (modal) {
          modal.dismiss();
        }
      } catch (error) {
        console.error('Error dismissing modal:', error);
      }
    });

    const extraMenu = $('.wcv-dashboard-menu.secondary');
    const toggleButton = $('#dashboard-menu-item-more-button');
    const primaryMenu = $('.wcv-dashboard-menu.primary');
    const menuContainer = $('#wcv-navigation');

    const moveItemsToExtraMenu = function() {
      const menuContainerWidth = menuContainer.width();
      const moreButtonWidth = toggleButton.outerWidth(true);
      const GAP_WIDTH = 24; // Define gap width between items
      let totalWidth = 0;
      let breakpoint = -1;

      // Store original order of all menu items
      const originalItems = [];
      primaryMenu.find('li').each(function() {
        originalItems.push($(this));
      });
      extraMenu.find('li').each(function() {
        originalItems.push($(this));
      });

      // Reset - move all items back to primary menu in original order
      extraMenu.empty();
      primaryMenu.empty();
      originalItems.forEach(item => {
        item
          .css('opacity', 0.5)
          .appendTo(primaryMenu)
          .animate({ opacity: 1 }, 100);
      });

      // Hide the more button initially
      toggleButton.hide();

      // Calculate total width and find breakpoint
      primaryMenu.find('li').each(function(index, element) {
        const itemWidth = $(this).outerWidth(true);
        // Add gap width except for the first item
        if (index > 0) {
          totalWidth += GAP_WIDTH;
        }
        totalWidth += itemWidth;

        if (
          totalWidth + moreButtonWidth > menuContainerWidth &&
          breakpoint === -1
        ) {
          breakpoint = index;
        }
      });

      // If we found a breakpoint, move items to extra menu while preserving order
      if (breakpoint !== -1) {
        toggleButton.show().css('display', 'flex');
        primaryMenu.find('li').each(function(index) {
          if (index >= breakpoint) {
            $(this).appendTo(extraMenu);
          }
        });
      }
    };

    moveItemsToExtraMenu();

    $(window).on('resize', moveItemsToExtraMenu);

    const addDividerToNav = function() {
      const breakItem =
        $('#dashboard-menu-item-view-store').length > 0
          ? $('#dashboard-menu-item-view-store')
          : $('#dashboard-menu-item-settings');

      $('<li class="wcv-dashboard-menu-divider"></li>').insertBefore(breakItem);
    };

    addDividerToNav();

    $('a.mark-order-unshipped').on('click', function(e) {
      if (!confirm(wcvendor_dashboard.mark_unshipped_confirm)) {
        e.preventDefault();
      }
    });

    $('.wcv-store-setup-dismiss').on('click', function(e) {
      e.preventDefault();
      $.ajax({
        url: wcvendor_dashboard.ajax_url,
        type: 'POST',
        data: {
          action: 'wcv_dismiss_store_setup_step_section',
          nonce: wcvendor_dashboard.dashboard_nonce
        },
        success: function(response) {
          if (response.success) {
            $('.wcv-store-setup-steps-wrapper').remove();
          }
        },
        error: function(error) {
          console.error(error);
        }
      });
    });

    function updateSetupProgress() {
      var screenWidth = $(window).width();
      var setupContainer = $('.wcv-store-setup-steps');
      var setupProgressContainer = $('.wcv-store-setup-progress-bar');
      var setupProgress = $('.wcv-store-setup-progress-bar-fill');
      var lastCompleteStep = $('.wcv-store-setup-step.completed:last');
      var firstStep = $('.wcv-store-setup-step:first');
      var lastStep = $('.wcv-store-setup-step:last');

      if (firstStep.length && lastStep.length && screenWidth > 768) {
        const setupContainerW =
          lastStep.position().left -
          firstStep.position().left +
          lastStep.width();
        setupProgressContainer.css({
          width: setupContainerW + 'px',
          height: '8px',
          top: firstStep.position().top + 72 + 'px',
          left: '50%'
        });
      } else if (firstStep.length && lastStep.length && screenWidth <= 768) {
        const nextStep = lastCompleteStep.next();
        const firstStepIcon = $('.wcv-store-setup-step-icon:first');
        const lastStepIcon = $('.wcv-store-setup-step-icon:last');
        const setupContainerH =
          lastStepIcon.offset().top - firstStepIcon.offset().top;

        setupProgressContainer.css({
          width: '3px',
          height: setupContainerH + 'px',
          top: firstStep.position().top + 40 + 'px',
          left: firstStep.position().left + 20 - 2 + 'px'
        });
      }

      if (lastCompleteStep.length && screenWidth > 768) {
        const nextStep = lastCompleteStep.next();
        let progressW =
          lastStep.position().left -
          setupContainer.position().left +
          lastStep.width();
        if (
          nextStep.length &&
          nextStep.position().left != lastStep.position().left
        ) {
          progressW =
            nextStep.position().left -
            setupContainer.position().left +
            lastStep.width() / 2;
        }
        setupProgress.css('width', progressW + 'px');
      } else if (lastCompleteStep.length && screenWidth <= 768) {
        const firstStepIcon = $('.wcv-store-setup-step-icon:first');
        const lastStepIcon = $('.wcv-store-setup-step-icon:last');
        const nextStep = lastCompleteStep.next();
        if (
          nextStep.length &&
          nextStep.position().top != lastStep.position().top
        ) {
          const nextStepIcon = nextStep.find('.wcv-store-setup-step-icon');
          const progressH =
            nextStepIcon.offset().top - firstStepIcon.offset().top;
          setupProgress.css({
            width: '3px',
            height: progressH + 'px'
          });
        } else {
          const progressH =
            lastStepIcon.offset().top - firstStepIcon.offset().top;
          setupProgress.css({
            width: '3px',
            height: progressH + 'px'
          });
        }
      }
    }

    updateSetupProgress();

    $(window).on('resize', function() {
      updateSetupProgress();
    });

    $(document).on('click', function(event) {
      const target = $(event.target);
      if (!target.closest('#dashboard-menu-item-more-button').length) {
        toggleButton.removeClass('show');
        extraMenu.removeClass('show');
      } else {
        if (toggleButton.length && extraMenu.length) {
          extraMenu.toggleClass('show');
          toggleButton.toggleClass('show');
        }
      }
    });

    $('.wcv-custom-select').each(function() {
      buildCustomSelect(this);
    });

    $('.wcv-open-popup-add-note').on('click', function(e) {
      const modalId = e.target.getAttribute('data-modal');

      const modal = document.getElementById(modalId);
      modal.dispatchEvent(new Event('click'));
    });

    let selectedCountry = $('#_wcv_store_country').val();

    $('#_wcv_store_country').on('change', function() {
      selectedCountry = $(this).val();
      $('#wcv-country-code-select')
        .val(selectedCountry)
        .trigger('change');
    });

    const country_codes = wcvendor_dashboard.countries_phone_codes.map(
      country => {
        return {
          id: country.code,
          text: `${country.flag} ${country.name} ${country.dial_code}`,
          flag: country.flag,
          name: country.name,
          dial_code: country.dial_code,
          selected: country.code === selectedCountry
        };
      }
    );

    const countryCodeSelectionTemplate = function(state) {
      if (!state.id) {
        return state.text;
      }
      const $state = $(
        `<div class="wcv-country-code-selection-item"><span class="wcv-country-code-selection-flag">${state.flag}</span> <span class="wcv-country-code-selection-dial-code">${state.dial_code}</span></div>`
      );
      return $state;
    };

    $('#wcv-country-code-select').select2({
      templateSelection: countryCodeSelectionTemplate,
      data: country_codes,
      dropdownAutoWidth: true,
      value: selectedCountry
    });

    $(document).on('mouseenter', '.wcv-tip', showTooltip);
    $(document).on('mouseleave', '.wcv-tip', function(event) {
      const tooltip = event.currentTarget;
      if (!tooltip) {
        return;
      }
      const content = tooltip.querySelector('.content');
      const arrow = tooltip.querySelector('.arrow');

      if (!content || !arrow) {
        return;
      }

      content.style.display = 'none';
      arrow.style.display = 'none';
    });

    addAccordion();
    productEditAccordion();
  });
})(jQuery, Ink);

const getPlaceHolderText = select => {
  const options = select.querySelectorAll('option');
  const selected = [];
  for (let i = 0; i < options.length; i++) {
    if (options[i].selected && options[i].value !== '') {
      selected.push(options[i]);
    }
  }

  if (selected.length === 0) {
    return (
      select.getAttribute('placeholder') || wcvendor_dashboard.option_none_text
    );
  } else if (selected.length === 1) {
    return selected[0].innerText;
  } else {
    return selected.length + ' selected';
  }
};

const buildCustomSelect = select => {
  const width = select.offsetWidth;
  const id = select.getAttribute('id');
  let textAlignment = select.getAttribute('data-text-align');
  if (!textAlignment) {
    textAlignment = 'center';
  }

  select.style.display = 'none';
  const selectContainer = document.createElement('div');
  selectContainer.setAttribute('data-id', id);
  const selectList = document.createElement('ul');
  const isMultiple = select.multiple;
  const autoSubmit = select.getAttribute('data-autosubmit');
  const placeHolderText = document.createElement('span');
  placeHolderText.innerHTML = getPlaceHolderText(select);
  placeHolderText.className = 'wcv-select-placeholder';
  selectContainer.className = 'wcv-select-container';
  selectList.className = 'wcv-select-list';
  selectContainer.appendChild(placeHolderText);
  selectContainer.appendChild(selectList);

  const options = select.options;
  for (let i = 0; i < options.length; i++) {
    const option = options[i];
    const optionItem = document.createElement('li');
    optionItem.className = 'wcv-select-item';
    const optionText = document.createElement('span');
    optionText.innerHTML = option.innerText;
    optionItem.appendChild(optionText);
    optionItem.style.textAlign = textAlignment;
    optionItem.setAttribute('data-value', option.value);
    optionItem.setAttribute('data-index', i);
    if (option.selected && option.value !== '') {
      optionItem.classList.add('selected');
    }
    optionItem.addEventListener('click', function() {
      const selectedIndex = this.getAttribute('data-index');
      const selectedOption = options[selectedIndex];
      if (!isMultiple) {
        for (let i = 0; i < options.length; i++) {
          if (i != selectedIndex) {
            options[i].selected = false;
            selectList.children[i].classList.remove('selected');
          }
        }
        selectedOption.selected = true;
        optionItem.classList.add('selected');
      } else {
        selectedOption.selected = selectedOption.selected ? false : true;
        optionItem.classList.toggle('selected');
      }

      if ('' === selectedOption.value) {
        for (let i = 0; i < options.length; i++) {
          if (i != selectedIndex) {
            options[i].selected = false;
            selectList.children[i].classList.remove('selected');
          }
        }
      }
      placeHolderText.innerHTML = getPlaceHolderText(select);
      select.dispatchEvent(new Event('change'));
      if (autoSubmit) {
        const form = select.closest('form');
        form.submit();
      }
    });
    selectList.appendChild(optionItem);
  }

  select.parentNode.insertBefore(selectContainer, select);

  //selectContainer.style.width = width + 'px';

  selectContainer.addEventListener('click', function() {
    selectContainer.classList.toggle('show');
    selectList.classList.toggle('show');
  });

  selectContainer.addEventListener('dblclick', function(event) {
    event.preventDefault();
  });

  document.addEventListener('click', function(event) {
    const target = event.target;
    if (!selectContainer.contains(target)) {
      selectContainer.classList.remove('show');
      selectList.classList.remove('show');
    }
  });
};

function showTooltip(event) {
  const tooltip = event.currentTarget;
  if (!tooltip) {
    return;
  }
  const content = tooltip.querySelector('.content');
  const arrow = tooltip.querySelector('.arrow');

  if (!content || !arrow) {
    return;
  }

  content.style.display = 'block';
  arrow.style.display = 'block';
  const tooltipRect = tooltip.getBoundingClientRect();
  const contentRect = content.getBoundingClientRect();

  // Position content above the tooltip
  let top = -contentRect.height - 10;
  let left = tooltipRect.width / 2 - contentRect.width / 2 + 4;

  // Adjust horizontal position if tooltip would go off-screen
  if (tooltipRect.left + contentRect.width > window.innerWidth) {
    left = tooltipRect.width - contentRect.width;
  }

  // Ensure the tooltip doesn't go above the top of the screen
  const isBelow = tooltipRect.top - contentRect.height < 0;
  if (isBelow) {
    top = tooltipRect.height + 10;
  }

  // Apply position to content
  content.style.top = `${top}px`;
  content.style.left = `${left}px`;

  // Position arrow
  if (arrow) {
    const arrowRect = arrow.getBoundingClientRect();
    const arrowTop = isBelow ? -arrowRect.height : contentRect.height;
    const arrowLeft = tooltipRect.width / 2 - arrowRect.width / 2 - left + 4;

    arrow.style.top = `${arrowTop}px`;
    arrow.style.left = `${arrowLeft}px`;
    arrow.style.transform = isBelow ? 'rotate(180deg)' : '';
  }
}

const addAccordion = () => {
  const settingsNav = document.querySelector('#wcv-store-settings .wcv-tabs');
  const tabsContent = document.querySelectorAll(
    '#wcv-store-settings .tabs-content'
  );
  if (settingsNav) {
    const tabs = settingsNav.querySelectorAll('a.tabs-tab');

    tabs.forEach(tab => {
      const tabContentId = tab.getAttribute('href').replace('#', '');
      const tabTitle = tab.innerText;
      const tabContent = document.querySelector(`#${tabContentId}`);
      const wrapper = document.createElement('div');
      const hasDot =
        tab.classList.contains('has-dot') &&
        tab.querySelector('.wcv-dot') !== null;
      wrapper.className = 'wcv-accordion-content';
      wrapElemt(tabContent, wrapper);
      const accordion = document.createElement('div');
      accordion.className = 'wcv_mobile wcv-accordion-title';
      if (tabContent.classList.contains('active')) {
        accordion.classList.add('active');
        tabContent.parentNode.classList.add('active');
      }
      const tabTitleElement = document.createElement('span');
      tabTitleElement.className = 'wcv-accordion-title-text';
      tabTitleElement.innerHTML = tabTitle;

      if (hasDot) {
        accordion.classList.add('has-dot');
        tabTitleElement.innerHTML += '<span class="wcv-dot"></span>';
      }
      accordion.appendChild(tabTitleElement);
      accordion.addEventListener('click', function() {
        accordion.classList.toggle('active');
        tabsContent.forEach(content => {
          if (content.id === tabContentId) {
            if (accordion.classList.contains('active')) {
              content.classList.add('active');
              content.classList.remove('hide-all');
            } else {
              content.classList.add('hide-all');
              content.classList.remove('active');
            }
            content.parentNode.classList.toggle('active');
          } else {
            content.classList.add('hide-all');
            content.classList.remove('active');
            content.parentNode.classList.remove('active');
            content.parentNode
              .querySelector('.wcv-accordion-title')
              .classList.remove('active');
          }
        });
      });
      wrapper.prepend(accordion);
    });

    if (typeof tinymce !== 'undefined' && tinymce.editors.length > 0) {
      const editors = document.querySelectorAll('.wp-editor-area');
      const preInits = tinyMCEPreInit.mceInit;
      for (let i = 0; i < editors.length; i++) {
        const editorId = editors[i].id;
        const configs = preInits[editorId];
        reinitWPEditor(editorId, configs);
      }
    }
  }
};

const productEditAccordion = () => {
  const tabContent = document.querySelectorAll(
    '#wcv-product-edit .tabs-content'
  );
  const tabs = wcvendor_dashboard.product_meta_tabs;

  tabContent.forEach(content => {
    const tabContentId = content.id;
    //check if tabContentId is in tabs
    if (!tabs[tabContentId]) {
      return;
    }
    const tab = tabs[tabContentId];
    const tabContentTitle = tab.label;
    const wrapper = document.createElement('div');
    wrapper.className =
      'wcv-product-accordion is_hidden ' + tab.class.join(' ');
    wrapElemt(content, wrapper);
    const accordion = document.createElement('div');
    accordion.className = 'wcv-accordion-title';
    accordion.setAttribute('data-tab', tabContentId);
    const accordionText = document.createElement('h3');
    const arrowIcon = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'svg'
    );
    arrowIcon.classList.add('wcv-icon', 'wcv-icon-24');
    arrowIcon.innerHTML = `<use xlink:href="${wcvendor_dashboard.icon_url}#wcv-icon-caret-down"></use>`;
    accordionText.innerHTML = tabContentTitle;
    accordion.appendChild(accordionText);
    accordion.appendChild(arrowIcon);

    accordion.addEventListener('click', function() {
      // Toggle the clicked accordion
      accordion.classList.toggle('active');
      if (accordion.classList.contains('active')) {
        content.classList.add('active');
        content.classList.remove('hide-all');
      } else {
        content.classList.add('hide-all');
        content.classList.remove('active');
      }
    });
    wrapper.prepend(accordion);
  });
};

const wrapElemt = (element, wrapper) => {
  element.parentNode.insertBefore(wrapper, element);
  wrapper.appendChild(element);
};

function reinitWPEditor(editorId, settings) {
  if (typeof tinymce !== 'undefined') {
    const editor = tinymce.get(editorId);
    if (editor) {
      editor.remove();
    }
  }

  const editorElement = document.getElementById(editorId);
  if (!editorElement) {
    console.error(`Editor element with ID "${editorId}" not found.`);
    return;
  }

  tinymce.init(settings);
}

const buildCustomToggleMenu = toogleElement => {
  const toogleButton = document.querySelector(toogleElement);
  if (!toogleButton) {
    return;
  }
  const target = toogleButton.getAttribute('data-target');
  const menu = document.querySelector(target);

  toogleButton.addEventListener('click', function() {
    toogleButton.classList.toggle('open');
    menu.classList.toggle('show');
  });
};

import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    /* BODY */
    body {
      background: ${(props) => props.theme.background};
      color: ${(props) => props.theme.primary};
    }

    /*=================================================================================================
      SCROLL BAR
    =================================================================================================*/
    body ::-webkit-scrollbar-thumb {
      cursor: pointer;
      border-radius: 5px;
      -webkit-transition: color 0.2s ease;
      transition: color 0.2s ease;
      border: 0.25rem ${(props) => props.theme.background} solid;
    }

    body ::-webkit-scrollbar-track {
      background: ${(props: any) => props.theme.background};
      border: 0.3rem ${(props) => props.theme.background} solid;
      border-radius: 0;
    }
    body ::-webkit-scrollbar {
      -webkit-appearance: none;
      width: 0.95rem;
      height: 1rem;
    }
    body ::-webkit-scrollbar-thumb {
      background-image: linear-gradient(${(props) => props.theme.sidebarBackground}, ${(props) =>
	props.theme.alternateBackground});
    }
    body ::-webkit-scrollbar-thumb:hover {
      background-color: ${(props) => props.theme.hoverColor};
    }

    /*=================================================================================================
      PAGE MODAL
    =================================================================================================*/
    .ui.page.modals.dimmer.transition.visible.active {
      z-index: 2;
      position: absolute;
    }

    /*=================================================================================================
      FORM INPUTS
    =================================================================================================*/
    .ui.input, .ui.selection {
      background-color: ${(props) => props.theme.sidebarBackground} !important;
      color: ${(props) => props.theme.primary} !important;
      border: 1px ${(props) => props.theme.inputBorder} solid !important;
      border-radius: 3px;
      .divider.text {
        color: ${(props) => props.theme.primary} !important;
      }
      input[type='text'], input[type='number'], input[type='email'] {
        background-color: ${(props) => props.theme.sidebarBackground} !important;
        color: ${(props) => props.theme.primary} !important;
      }
      .borderless-input {
        border: none !important;
      }
    }
    .ui.input.override {
      input[type='text'], input[type='number'], input[type='email'] {
        background-color: ${(props) => props.theme.overrideBackground} !important;
        color: ${(props) => props.theme.primary} !important;
      }
    }
    .ui.selection.dropdown {
      border: 1px ${(props) => props.theme.borderColor} solid !important;
    }

    .ui.selection.dropdown .menu {
      border: solid 1px ${(props) => props.theme.borderColor} !important;
    }
    .ui.selection.dropdown .menu>.item:hover{
      background-color: ${(props) => props.theme.secondaryBackground} !important;
    }
    .ui.label {
      color: ${(props) => props.theme.primary} !important;
      background-color: ${(props) => props.theme.secondaryBackground} !important;
    }
    .ui.mini.label:not(.override) {
      background: ${(props) => props.theme.background} !important;
    }
    .field label, label {
      color: ${(props) => props.theme.primary} !important;
    }
    .field textarea, #textarea {
      background-color: ${(props) => props.theme.sidebarBackground} !important;
      color: ${(props) => props.theme.primary} !important;
      border: 1px ${(props) => props.theme.borderColor} solid !important;
      border-radius: 3px;
    }
    .inline.fields, .field.location-field {
      border: 1px ${(props) => props.theme.borderColor} solid !important;
    }
    .menu.transition {
      border: 1px ${(props) => props.theme.secondaryBackground} solid !important;
      background: ${(props) => props.theme.background} !important;

      .item, .message {
        background-color: ${(props) => props.theme.sidebarBackground} !important;
        color: ${(props) => props.theme.primary} !important;
        border-top: 1px ${(props) => props.theme.secondaryBackground} solid !important;
      }
    }
    .ui.tiny.header {
      color: ${(props) => props.theme.primary} !important;
      font-weight: bold !important;
    }
    .ui.checked.slider.checkbox, .ui.slider.checkbox {
      && label, label::before, label::after {
        color: ${(props) => props.theme.primary} !important;
      }
    }

    /*=================================================================================================
      BUTTONS
    =================================================================================================*/
    .ui.basic.inverted.borderless-btn {
      color: ${(props) => props.theme.primary} !important;
      background: ${(props) => props.theme.background} !important;
      box-shadow: none !important;

      &:hover {
        box-shadow: none !important;
        border: none !important;
        color: ${(props) => props.theme.bright};
      }
    }

    /*=================================================================================================
      TABLES
    =================================================================================================*/
    /* .ui.table {
        background: ${(props) => props.theme.background} !important;
      }
    .ui.celled.table {
      thead tr {
        background: ${(props) => props.theme.stripedBackground} !important;
      }
    } */

    .ui.pointing.inverted.secondary.menu .item.active {
      color: ${(props) => props.theme.primary} !important;
    }
    /*=================================================================================================
      OTHERS
    =================================================================================================*/
    .ui.left.visible.sidebar, .ui.right.visible.sidebar {
      box-shadow: ${(props) => props.theme.detailsShadowColor} 0px 0px 20px !important;
    }
    .ui.checkbox .box:before, .ui.checkbox label:before {
      background: ${(props) => props.theme.checkboxBackground} !important;
    }
    && .ui.loading.form {
      &::before,
      &::after {
        background: ${(props) => props.theme.dimmerBackground} !important;
      }
	  }
    /*=================================================================================================
      STEP VIEW
    =================================================================================================*/
    .ui.steps {
      margin-top: 2rem;
    }

    .ui.steps,
    .ui.steps .step,
    .step:after {
      background: ${(props) => props.theme.background} !important;
      color: ${(props) => props.theme.primary} !important;
      border-color: ${(props) => props.theme.stepBorderColor} !important;
    }

    .ui.steps .step .description {
      color: ${(props) => props.theme.primary} !important;
    }

    .ui.steps .link.step:hover,
    .ui.steps .link.step:hover::after,
    .ui.steps a.step:hover,
    .ui.steps a.step:hover::after {
      background: ${(props) => props.theme.stepHoverBackgroundColor} !important;
    }

    .ui.steps .active.step, .ui.steps .active.step:after {
      background: ${(props) => props.theme.stepActiveColor} !important;
    }

    .ui.ordered.steps,
    .ui.steps .active.step .icon {
      color: ${(props) => props.theme.stepIconColor} !important;
    }


     /*=================================================================================================
      SEMANTIC MESSAGE COMPONENT
    =================================================================================================*/
   .ui.message {
      background-color: ${({ theme }) => theme.background} !important;
      color: ${({ theme }) => theme.tableText} !important;

    }
    .ui.info.message{
      color: ${({ theme }) => theme.messageInfoTextColor} !important;
    }
    .ui.info.message,.ui.info.message .header {
      color: ${({ theme }) => theme.messageInfoHeaderColor} !important;
    }
    .ui.warning.message{
      color: ${({ theme }) => theme.messageWarningTextColor} !important;
    }
    .ui.warning.message,.ui.warning.message .header {
      color: ${({ theme }) => theme.messageWarningHeaderColor} !important;
    }

     /*=================================================================================================
      SEMANTIC HEADER COMPONENT
    =================================================================================================*/
    .ui.header {
      color: ${(props) => props.theme.primary};
    }
    .ui.header .sub.header {
      color: ${(props) => props.theme.primary};
    }

     /*=================================================================================================
      SEMANTIC MODAL COMPONENT
    =================================================================================================*/
    .ui.page.modals.dimmer.transition.visible.active {
      padding: 0 !important;
      align-items: center;
      justify-content: center;
    }

    /*=================================================================================================
    FLEX GLOBALS
    =================================================================================================*/
    .flex{
      display: flex;
    }
`;

export default GlobalStyle;

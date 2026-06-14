/* @ds-bundle: {"format":3,"namespace":"MojtabaMasoudinejadDesignSystem_141387","components":[{"name":"Avatar","sourcePath":"components/data/Avatar.jsx"},{"name":"AvatarGroup","sourcePath":"components/data/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data/Badge.jsx"},{"name":"Card","sourcePath":"components/data/Card.jsx"},{"name":"Tag","sourcePath":"components/data/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"ToastViewport","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Field","sourcePath":"components/forms/Field.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Navbar","sourcePath":"components/navigation/Navbar.jsx"},{"name":"NavLink","sourcePath":"components/navigation/Navbar.jsx"},{"name":"NavLinks","sourcePath":"components/navigation/Navbar.jsx"},{"name":"NavSpacer","sourcePath":"components/navigation/Navbar.jsx"},{"name":"NavActions","sourcePath":"components/navigation/Navbar.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"ThemeToggle","sourcePath":"components/navigation/ThemeToggle.jsx"}],"sourceHashes":{"components/data/Avatar.jsx":"d00357df0206","components/data/Badge.jsx":"ee3d8466aca5","components/data/Card.jsx":"0e25132cf6df","components/data/Tag.jsx":"faa28515594c","components/feedback/Dialog.jsx":"a54b14500086","components/feedback/Toast.jsx":"3eddd0e50ce3","components/feedback/Tooltip.jsx":"3b9bef8723e4","components/forms/Button.jsx":"3e76ca861fe6","components/forms/Checkbox.jsx":"744815056d16","components/forms/Field.jsx":"710f1d7727d8","components/forms/IconButton.jsx":"4d206e8e2cda","components/forms/Input.jsx":"ea1f2fdc08cb","components/forms/Radio.jsx":"5c03dfea5acb","components/forms/Select.jsx":"e9a1d9eeb952","components/forms/Switch.jsx":"f6419c79045b","components/forms/Textarea.jsx":"580a13fb0692","components/navigation/Navbar.jsx":"a3a2ee6db641","components/navigation/Tabs.jsx":"91197dfdd097","components/navigation/ThemeToggle.jsx":"3c53d1f80c6f","ui_kits/portfolio/About.jsx":"1b67963ba5e3","ui_kits/portfolio/App.jsx":"f740a8fceb77","ui_kits/portfolio/Home.jsx":"8accfe539ff7","ui_kits/portfolio/Icons.jsx":"d065fa6a1662"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.MojtabaMasoudinejadDesignSystem_141387 = window.MojtabaMasoudinejadDesignSystem_141387 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
function initialsFrom(name = '') {
  const parts = name.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return (parts[0][0] + parts[parts.length - 1][0]).toUpperCase();
}

/**
 * Avatar — user image or initials fallback.
 * size: xs | sm | md | lg | xl · status: online | busy | away | offline
 */
function Avatar({
  src,
  name = '',
  size = 'md',
  square = false,
  status,
  className = '',
  ...rest
}) {
  const cls = ['mm-avatar', size !== 'md' && `mm-avatar--${size}`, square && 'mm-avatar--square', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls,
    title: name || undefined
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name
  }) : /*#__PURE__*/React.createElement("span", {
    "aria-hidden": "true"
  }, initialsFrom(name)), status && /*#__PURE__*/React.createElement("span", {
    className: `mm-avatar__status mm-avatar__status--${status}`,
    "aria-label": status
  }));
}

/** AvatarGroup — overlapping stack of avatars. */
function AvatarGroup({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mm-avatar-group', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Avatar, AvatarGroup });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Badge — compact status / category label.
 * tone: neutral | accent | support | success | warning | danger
 */
function Badge({
  tone = 'neutral',
  solid = false,
  dot = false,
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const cls = ['mm-badge', `mm-badge--${tone}`, solid && 'mm-badge--solid', size === 'sm' && 'mm-badge--sm', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("span", _extends({
    className: cls
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    className: "mm-badge__dot",
    "aria-hidden": "true"
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Card — surface container for grouped content.
 * Use props for the common header/body/footer pattern, or pass
 * children for full control.
 * variant: default | raised | flat | outlined
 */
function Card({
  variant = 'default',
  interactive = false,
  media,
  title,
  description,
  footer,
  className = '',
  children,
  ...rest
}) {
  const cls = ['mm-card', variant !== 'default' && `mm-card--${variant}`, interactive && 'mm-card--interactive', className].filter(Boolean).join(' ');
  const structured = title || description || media || footer;
  return /*#__PURE__*/React.createElement("div", _extends({
    className: cls
  }, rest), media && (typeof media === 'string' ? /*#__PURE__*/React.createElement("img", {
    className: "mm-card__media",
    src: media,
    alt: ""
  }) : /*#__PURE__*/React.createElement("div", {
    className: "mm-card__media"
  }, media)), (title || description) && /*#__PURE__*/React.createElement("div", {
    className: "mm-card__header"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "mm-card__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "mm-card__desc"
  }, description)), children && (structured ? /*#__PURE__*/React.createElement("div", {
    className: "mm-card__body"
  }, children) : /*#__PURE__*/React.createElement("div", {
    className: "mm-card__pad"
  }, children)), footer && /*#__PURE__*/React.createElement("div", {
    className: "mm-card__footer"
  }, footer));
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Card.jsx", error: String((e && e.message) || e) }); }

// components/data/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Tag — chip for filters and selectable keywords.
 * Pass `onRemove` to show a dismiss (×) affordance.
 */
function Tag({
  active = false,
  onRemove,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    className: ['mm-tag', active && 'mm-tag--active', className].filter(Boolean).join(' ')
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mm-tag__x",
    "aria-label": "Remove",
    onClick: onRemove
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  success: /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }),
  warning: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("path", {
    d: "M12 9v4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 17h.01"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M10.3 3.9 1.8 18a2 2 0 0 0 1.7 3h17a2 2 0 0 0 1.7-3L13.7 3.9a2 2 0 0 0-3.4 0Z"
  })),
  danger: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 8v4M12 16h.01"
  })),
  info: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 11v5M12 8h.01"
  }))
};

/**
 * Toast — transient notification. Render inside <ToastViewport>.
 * tone: info | success | warning | danger
 */
function Toast({
  tone = 'info',
  title,
  children,
  onClose,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['mm-toast', `mm-toast--${tone}`, className].filter(Boolean).join(' '),
    role: "status"
  }, rest), /*#__PURE__*/React.createElement("span", {
    className: "mm-toast__icon",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, ICONS[tone])), /*#__PURE__*/React.createElement("div", {
    className: "mm-toast__body"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "mm-toast__title"
  }, title), children && /*#__PURE__*/React.createElement("div", {
    className: "mm-toast__desc"
  }, children)), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "mm-toast__close",
    "aria-label": "Dismiss",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}

/** ToastViewport — fixed bottom-right stack for toasts. */
function ToastViewport({
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    className: ['mm-toast-viewport', className].filter(Boolean).join(' ')
  }, rest), children);
}
Object.assign(__ds_scope, { Toast, ToastViewport });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/**
 * Tooltip — small label shown on hover/focus of its child.
 * placement: top | bottom
 */
function Tooltip({
  label,
  placement = 'top',
  children
}) {
  const [open, setOpen] = React.useState(false);
  return /*#__PURE__*/React.createElement("span", {
    className: "mm-tooltip-wrap",
    "data-open": open,
    onMouseEnter: () => setOpen(true),
    onMouseLeave: () => setOpen(false),
    onFocus: () => setOpen(true),
    onBlur: () => setOpen(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    className: ['mm-tooltip', placement === 'bottom' && 'mm-tooltip--bottom'].filter(Boolean).join(' '),
    role: "tooltip"
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — primary action control.
 * Variants: primary | secondary | ghost | subtle | danger | link
 * Sizes: sm | md | lg
 */
function Button({
  variant = 'primary',
  size = 'md',
  pill = false,
  block = false,
  leadingIcon,
  trailingIcon,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['mm-btn', `mm-btn--${variant}`, size !== 'md' && `mm-btn--${size}`, pill && 'mm-btn--pill', block && 'mm-btn--block', className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    disabled: disabled
  }, rest), leadingIcon && /*#__PURE__*/React.createElement("span", {
    className: "mm-btn__icon",
    "aria-hidden": "true"
  }, leadingIcon), children, trailingIcon && /*#__PURE__*/React.createElement("span", {
    className: "mm-btn__icon",
    "aria-hidden": "true"
  }, trailingIcon));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox — labelled boolean control. */
function Checkbox({
  label,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mm-check', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mm-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "3.2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), (label || children) && /*#__PURE__*/React.createElement("span", {
    className: "mm-check__text"
  }, label || children));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Field.jsx
try { (() => {
/**
 * Field — label / hint / error wrapper for form controls.
 * Compose around Input, Select, Textarea, etc.
 */
function Field({
  label,
  htmlFor,
  required = false,
  hint,
  error,
  className = '',
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['mm-field', className].filter(Boolean).join(' ')
  }, label && /*#__PURE__*/React.createElement("label", {
    className: "mm-field__label",
    htmlFor: htmlFor
  }, label, required && /*#__PURE__*/React.createElement("span", {
    className: "mm-req",
    "aria-hidden": "true"
  }, "*")), children, error ? /*#__PURE__*/React.createElement("span", {
    className: "mm-field__error"
  }, error) : hint && /*#__PURE__*/React.createElement("span", {
    className: "mm-field__hint"
  }, hint));
}
Object.assign(__ds_scope, { Field });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Field.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * IconButton — square, icon-only control (close, more, toolbar actions).
 * variant: ghost | solid | accent · size: sm | md | lg
 * Always pass an accessible `label` (sets aria-label).
 */
function IconButton({
  variant = 'ghost',
  size = 'md',
  label,
  disabled = false,
  type = 'button',
  className = '',
  children,
  ...rest
}) {
  const cls = ['mm-iconbtn', variant !== 'ghost' && `mm-iconbtn--${variant}`, size !== 'md' && `mm-iconbtn--${size}`, className].filter(Boolean).join(' ');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    className: cls,
    "aria-label": label,
    title: label,
    disabled: disabled
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/**
 * Dialog — modal overlay for focused tasks and confirmations.
 * Controlled: pass `open` and `onClose`.
 */
function Dialog({
  open,
  onClose,
  title,
  description,
  size = 'md',
  footer,
  className = '',
  children
}) {
  React.useEffect(() => {
    if (!open) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose && onClose();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog-backdrop",
    onMouseDown: e => {
      if (e.target === e.currentTarget) onClose && onClose();
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: ['mm-dialog', size !== 'md' && `mm-dialog--${size}`, className].filter(Boolean).join(' '),
    role: "dialog",
    "aria-modal": "true",
    "aria-label": typeof title === 'string' ? title : undefined
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__head"
  }, /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__titles"
  }, title && /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__title"
  }, title), description && /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__desc"
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    label: "Close",
    size: "sm",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), children && /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__body"
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    className: "mm-dialog__footer"
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — single-line text field. Optional leading icon.
 * size: sm | md | lg
 */
function Input({
  size = 'md',
  leadingIcon,
  invalid = false,
  disabled = false,
  type = 'text',
  className = '',
  ...rest
}) {
  const input = /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    className: ['mm-input', size !== 'md' && `mm-input--${size}`, className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined,
    disabled: disabled
  }, rest));
  if (!leadingIcon) return input;
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-inputwrap mm-inputwrap--icon"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-inputwrap__icon",
    "aria-hidden": "true"
  }, leadingIcon), input);
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio — single choice within a `name` group. */
function Radio({
  label,
  name,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mm-check', 'mm-check--radio', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mm-check__box",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-check__dot"
  })), (label || children) && /*#__PURE__*/React.createElement("span", {
    className: "mm-check__text"
  }, label || children));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Select — native dropdown with a styled chevron.
 * Pass options as [{ value, label }] or use children <option>s.
 */
function Select({
  size = 'md',
  options,
  invalid = false,
  disabled = false,
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-selectwrap"
  }, /*#__PURE__*/React.createElement("select", _extends({
    className: ['mm-select', size !== 'md' && `mm-select--${size}`, className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined,
    disabled: disabled
  }, rest), options ? options.map(o => /*#__PURE__*/React.createElement("option", {
    key: o.value,
    value: o.value
  }, o.label)) : children), /*#__PURE__*/React.createElement("span", {
    className: "mm-selectwrap__chev",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("svg", {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Switch — toggle for instant on/off settings. */
function Switch({
  label,
  disabled = false,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    className: ['mm-switch', className].filter(Boolean).join(' ')
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    disabled: disabled
  }, rest)), /*#__PURE__*/React.createElement("span", {
    className: "mm-switch__track",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("span", {
    className: "mm-switch__thumb"
  })), label && /*#__PURE__*/React.createElement("span", {
    className: "mm-switch__text"
  }, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Textarea — multi-line text field. */
function Textarea({
  invalid = false,
  disabled = false,
  rows = 4,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("textarea", _extends({
    rows: rows,
    className: ['mm-textarea', className].filter(Boolean).join(' '),
    "aria-invalid": invalid || undefined,
    disabled: disabled
  }, rest));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Navbar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Navbar — sticky top bar. Compose with NavLink, NavSpacer, NavActions. */
function Navbar({
  brand,
  children,
  className = '',
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    className: ['mm-navbar', className].filter(Boolean).join(' ')
  }, rest), brand && /*#__PURE__*/React.createElement("div", {
    className: "mm-navbar__brand"
  }, brand), children);
}

/** NavLink — a single navigation item; mark the current page `active`. */
function NavLink({
  active = false,
  href = '#',
  className = '',
  children,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("a", _extends({
    href: href,
    className: ['mm-navlink', active && 'mm-navlink--active', className].filter(Boolean).join(' '),
    "aria-current": active ? 'page' : undefined
  }, rest), children);
}

/** NavLinks — inline group of NavLink items. */
function NavLinks({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-navbar__links"
  }, children);
}

/** NavSpacer — pushes following items to the right. */
function NavSpacer() {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-navbar__spacer"
  });
}

/** NavActions — right-aligned action cluster. */
function NavActions({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "mm-navbar__actions"
  }, children);
}
Object.assign(__ds_scope, { Navbar, NavLink, NavLinks, NavSpacer, NavActions });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Navbar.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/**
 * Tabs — switch between sibling views.
 * Controlled: pass `value` and `onChange`. Items: [{ value, label, count? }].
 * variant: underline | pill
 */
function Tabs({
  items = [],
  value,
  onChange,
  variant = 'underline',
  className = ''
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: ['mm-tabs', variant === 'pill' && 'mm-tabs--pill', className].filter(Boolean).join(' '),
    role: "tablist"
  }, items.map(it => /*#__PURE__*/React.createElement("button", {
    key: it.value,
    type: "button",
    role: "tab",
    "aria-selected": value === it.value,
    className: "mm-tab",
    onClick: () => onChange && onChange(it.value)
  }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
    className: "mm-tab__count"
  }, it.count))));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/ThemeToggle.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const KEY = 'mm-theme';
function getInitial() {
  if (typeof document === 'undefined') return 'light';
  const stored = (() => {
    try {
      return localStorage.getItem(KEY);
    } catch {
      return null;
    }
  })();
  if (stored === 'light' || stored === 'dark') return stored;
  const attr = document.documentElement.getAttribute('data-theme');
  if (attr) return attr;
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

/**
 * ThemeToggle — flips light/dark, sets `data-theme` on <html>,
 * and persists the choice to localStorage. Drop one in your navbar.
 */
function ThemeToggle({
  className = '',
  ...rest
}) {
  const [theme, setTheme] = React.useState(getInitial);
  React.useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    try {
      localStorage.setItem(KEY, theme);
    } catch {}
  }, [theme]);
  const toggle = () => setTheme(t => t === 'dark' ? 'light' : 'dark');
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    className: ['mm-themetoggle', className].filter(Boolean).join(' '),
    onClick: toggle,
    "aria-label": theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme',
    title: "Toggle theme"
  }, rest), /*#__PURE__*/React.createElement("svg", {
    className: "mm-moon",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z"
  })), /*#__PURE__*/React.createElement("svg", {
    className: "mm-sun",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"
  })));
}
Object.assign(__ds_scope, { ThemeToggle });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/ThemeToggle.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/About.jsx
try { (() => {
// Portfolio — About / Résumé view (shared by the portfolio and resume kits)
const NS_ABOUT = window.MojtabaMasoudinejadDesignSystem_141387;
const EXPERIENCE = [{
  when: '2024 — now',
  role: 'Research Engineer',
  org: 'Independent',
  desc: 'Building open tooling for interpretability and lab telemetry; writing a book on learning systems.'
}, {
  when: '2021 — 24',
  role: 'ML Researcher',
  org: 'Institute for Adaptive Systems',
  desc: 'Representation learning and training dynamics. Shipped two visualization toolkits used across the lab.'
}, {
  when: '2019 — 21',
  role: 'Software Engineer',
  org: 'Helios Data',
  desc: 'Real-time data pipelines and developer tools for scientific instruments.'
}];
const EDUCATION = [{
  when: '2019',
  role: 'M.Sc. Computer Science',
  org: 'Technical University',
  desc: 'Thesis on probabilistic models for sequential data. Graduated with distinction.'
}, {
  when: '2017',
  role: 'B.Sc. Physics',
  org: 'University of Tehran',
  desc: 'Foundations in statistical mechanics and numerical methods.'
}];
const SKILLS = ['Machine learning', 'Python', 'Rust', 'TypeScript', 'PyTorch', 'Data visualization', 'Distributed systems', 'Technical writing', 'Statistics', 'Open source'];
const PUBLICATIONS = [{
  title: 'Tracking representation drift during long training runs',
  meta: 'Workshop on Interpretability, 2025'
}, {
  title: 'A protocol for streaming laboratory telemetry',
  meta: 'Journal of Open Research Software, 2024'
}, {
  title: 'Probabilistic primers: teaching intuition first',
  meta: 'Preprint, 2024'
}];
function AboutHeader() {
  const {
    Button,
    Avatar
  } = NS_ABOUT;
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-section pf-container",
    style: {
      paddingBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "microscope"
  }), " About"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-5)',
      marginTop: 'var(--space-4)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "Mojtaba Masoudinejad",
    size: "xl"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: '260px'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    className: "pf-section-title",
    style: {
      fontSize: 'var(--text-4xl)'
    }
  }, "Mojtaba Masoudinejad"), /*#__PURE__*/React.createElement("p", {
    className: "pf-section-sub",
    style: {
      maxWidth: '52ch'
    }
  }, "Research engineer working on machine-learning systems and the tools that make them understandable.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 'var(--space-2)',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "mail"
    })
  }, "Get in touch"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "download"
    })
  }, "Download CV"))));
}
function Aside() {
  const {
    Badge
  } = NS_ABOUT;
  return /*#__PURE__*/React.createElement("aside", {
    className: "pf-about-aside"
  }, /*#__PURE__*/React.createElement("dl", {
    style: {
      margin: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-stat"
  }, /*#__PURE__*/React.createElement("dt", null, "Location"), /*#__PURE__*/React.createElement("dd", null, "Berlin, DE")), /*#__PURE__*/React.createElement("div", {
    className: "pf-stat"
  }, /*#__PURE__*/React.createElement("dt", null, "Focus"), /*#__PURE__*/React.createElement("dd", null, "ML systems")), /*#__PURE__*/React.createElement("div", {
    className: "pf-stat"
  }, /*#__PURE__*/React.createElement("dt", null, "Experience"), /*#__PURE__*/React.createElement("dd", null, "7 years")), /*#__PURE__*/React.createElement("div", {
    className: "pf-stat"
  }, /*#__PURE__*/React.createElement("dt", null, "Publications"), /*#__PURE__*/React.createElement("dd", null, "6 papers"))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Badge, {
    tone: "success",
    dot: true
  }, "Available for consulting")));
}
function Section({
  icon,
  title,
  children
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      marginBottom: 'var(--space-12)'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontFamily: 'var(--font-display)',
      fontSize: 'var(--text-xl)',
      marginBottom: 'var(--space-5)',
      display: 'flex',
      alignItems: 'center',
      gap: 'var(--space-2)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--accent)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: icon
  })), title), children);
}
function Timeline({
  entries
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "pf-timeline"
  }, entries.map(e => /*#__PURE__*/React.createElement("div", {
    className: "pf-entry",
    key: e.role + e.when
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-entry-when"
  }, e.when), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-entry-role"
  }, e.role), /*#__PURE__*/React.createElement("div", {
    className: "pf-entry-org"
  }, e.org), /*#__PURE__*/React.createElement("div", {
    className: "pf-entry-desc"
  }, e.desc)))));
}
function PFAbout() {
  const {
    Tag
  } = NS_ABOUT;
  return /*#__PURE__*/React.createElement("main", {
    className: "pf"
  }, /*#__PURE__*/React.createElement(AboutHeader, null), /*#__PURE__*/React.createElement("div", {
    className: "pf-container",
    style: {
      paddingBottom: 'var(--space-20)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-about-grid"
  }, /*#__PURE__*/React.createElement(Aside, null), /*#__PURE__*/React.createElement("div", {
    className: "pf-prose",
    style: {
      maxWidth: 'none'
    }
  }, /*#__PURE__*/React.createElement(Section, {
    icon: "quote",
    title: "In short"
  }, /*#__PURE__*/React.createElement("p", null, "I'm a research engineer who likes the ", /*#__PURE__*/React.createElement("strong", null, "unglamorous middle"), " \u2014 the tools, the plots, the protocols that let a team actually trust its results. I move between writing models and writing prose, and I think the second makes the first better."), /*#__PURE__*/React.createElement("p", null, "Lately I've been building open instruments for interpretability and ", /*#__PURE__*/React.createElement("strong", null, "writing a book"), " that teaches machine learning intuition-first.")), /*#__PURE__*/React.createElement(Section, {
    icon: "flask",
    title: "Experience"
  }, /*#__PURE__*/React.createElement(Timeline, {
    entries: EXPERIENCE
  })), /*#__PURE__*/React.createElement(Section, {
    icon: "graduation-cap",
    title: "Education"
  }, /*#__PURE__*/React.createElement(Timeline, {
    entries: EDUCATION
  })), /*#__PURE__*/React.createElement(Section, {
    icon: "sparkles",
    title: "Skills"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-tags"
  }, SKILLS.map(s => /*#__PURE__*/React.createElement(Tag, {
    key: s
  }, s)))), /*#__PURE__*/React.createElement(Section, {
    icon: "book-open",
    title: "Selected publications"
  }, /*#__PURE__*/React.createElement("div", null, PUBLICATIONS.map(p => /*#__PURE__*/React.createElement("div", {
    className: "pf-pub",
    key: p.title
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-pub-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "pf-pub-meta"
  }, p.meta)))))))));
}
window.PFAbout = PFAbout;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/About.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/App.jsx
try { (() => {
// Portfolio — App shell: navbar, routing, footer, contact dialog
const NS_APP = window.MojtabaMasoudinejadDesignSystem_141387;
function Brand({
  onClick
}) {
  return /*#__PURE__*/React.createElement("a", {
    className: "mm-navbar__brand",
    href: "#",
    onClick: e => {
      e.preventDefault();
      onClick();
    }
  }, "Mojtaba Masoudinejad");
}
function Footer() {
  const {
    IconButton,
    Tooltip
  } = NS_APP;
  return /*#__PURE__*/React.createElement("footer", {
    className: "pf-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-container pf-footer-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-footer-note"
  }, "\xA9 2026 Mojtaba Masoudinejad \xB7 Built with care & curiosity"), /*#__PURE__*/React.createElement("div", {
    className: "pf-social"
  }, /*#__PURE__*/React.createElement(Tooltip, {
    label: "GitHub"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "GitHub",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "github"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "LinkedIn"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "LinkedIn",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "linkedin"
  }))), /*#__PURE__*/React.createElement(Tooltip, {
    label: "Email"
  }, /*#__PURE__*/React.createElement(IconButton, {
    label: "Email",
    variant: "ghost"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "mail"
  }))))));
}
function ContactDialog({
  open,
  onClose,
  onSent
}) {
  const {
    Dialog,
    Field,
    Input,
    Textarea,
    Button
  } = NS_APP;
  return /*#__PURE__*/React.createElement(Dialog, {
    open: open,
    onClose: onClose,
    title: "Let's talk",
    description: "Tell me a little about what you're working on.",
    footer: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: onClose
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      variant: "primary",
      onClick: () => {
        onClose();
        onSent();
      }
    }, "Send message"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 'var(--space-4)'
    }
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name"
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Ada Lovelace"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Email",
    hint: "I'll reply within a few days."
  }, /*#__PURE__*/React.createElement(Input, {
    type: "email",
    placeholder: "you@domain.com"
  })), /*#__PURE__*/React.createElement(Field, {
    label: "Message"
  }, /*#__PURE__*/React.createElement(Textarea, {
    rows: 3,
    placeholder: "A sentence or two\u2026"
  }))));
}
function PFApp() {
  const {
    Navbar,
    NavLink,
    NavLinks,
    NavSpacer,
    NavActions,
    ThemeToggle,
    Button,
    Toast,
    ToastViewport
  } = NS_APP;
  const [view, setView] = React.useState('home');
  const [contact, setContact] = React.useState(false);
  const [toast, setToast] = React.useState(false);
  React.useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(false), 3500);
    return () => clearTimeout(t);
  }, [toast]);
  const go = v => e => {
    if (e) e.preventDefault();
    setView(v);
    window.scrollTo({
      top: 0
    });
  };
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Navbar, {
    brand: /*#__PURE__*/React.createElement(Brand, {
      onClick: () => setView('home')
    })
  }, /*#__PURE__*/React.createElement(NavLinks, null, /*#__PURE__*/React.createElement(NavLink, {
    active: view === 'home',
    href: "#",
    onClick: go('home')
  }, "Work"), /*#__PURE__*/React.createElement(NavLink, {
    href: "#",
    onClick: go('home')
  }, "Writing"), /*#__PURE__*/React.createElement(NavLink, {
    active: view === 'about',
    href: "#",
    onClick: go('about')
  }, "About")), /*#__PURE__*/React.createElement(NavSpacer, null), /*#__PURE__*/React.createElement(NavActions, null, /*#__PURE__*/React.createElement(ThemeToggle, null), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "primary",
    onClick: () => setContact(true)
  }, "Contact"))), view === 'home' ? /*#__PURE__*/React.createElement(PFHome, null) : /*#__PURE__*/React.createElement(PFAbout, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(ContactDialog, {
    open: contact,
    onClose: () => setContact(false),
    onSent: () => setToast(true)
  }), toast && /*#__PURE__*/React.createElement(ToastViewport, null, /*#__PURE__*/React.createElement(Toast, {
    tone: "success",
    title: "Message sent",
    onClose: () => setToast(false)
  }, "Thanks \u2014 I'll be in touch soon.")));
}
window.PFApp = PFApp;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/App.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Home.jsx
try { (() => {
// Portfolio — Home view (hero, selected work, writing)
const {
  Button,
  Badge,
  Tag,
  Card,
  Tooltip,
  IconButton
} = window.MojtabaMasoudinejadDesignSystem_141387;
const WORK = [{
  title: 'Latent dynamics of learning systems',
  blurb: 'A toolkit for visualising how representations drift during training.',
  tags: ['Research', 'Python', 'Visualization'],
  tone: 'accent',
  badge: 'Lead'
}, {
  title: 'Open protocols for lab telemetry',
  blurb: 'Lightweight standard for streaming instrument data in real time.',
  tags: ['Systems', 'Rust', 'Open source'],
  tone: 'support',
  badge: 'Maintainer'
}, {
  title: 'Diffusion, explained simply',
  blurb: 'An interactive essay that builds intuition before equations.',
  tags: ['Writing', 'Interactive'],
  tone: 'accent',
  badge: 'Essay'
}, {
  title: 'Field notebook',
  blurb: 'A small, fast note app for capturing ideas mid-experiment.',
  tags: ['Product', 'TypeScript'],
  tone: 'neutral',
  badge: 'Side project'
}];
const POSTS = [{
  title: 'What a neuron is actually doing',
  cat: 'Note',
  date: 'May 2026',
  read: '6 min'
}, {
  title: 'On reading papers slowly',
  cat: 'Essay',
  date: 'Apr 2026',
  read: '9 min'
}, {
  title: 'A gentle map of probability',
  cat: 'Primer',
  date: 'Feb 2026',
  read: '14 min'
}];
function Hero() {
  return /*#__PURE__*/React.createElement("header", {
    className: "pf-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-container pf-hero-grid"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "sparkles"
  }), " Researcher \xB7 Engineer \xB7 Writer"), /*#__PURE__*/React.createElement("h1", null, "Hi, I'm Mojtaba.", /*#__PURE__*/React.createElement("br", null), "I study how systems ", /*#__PURE__*/React.createElement("span", {
    className: "accent"
  }, "learn"), "."), /*#__PURE__*/React.createElement("p", {
    className: "pf-hero-lede"
  }, "I work at the seam between machine learning research and the tools that make it legible \u2014 and I write to make hard ideas feel simple."), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero-meta"
  }, /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "map-pin"
  }), " Based in Berlin"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "flask"
  }), " ML systems & tooling"), /*#__PURE__*/React.createElement("span", null, /*#__PURE__*/React.createElement(Icon, {
    name: "book-open"
  }), " Currently writing a book")), /*#__PURE__*/React.createElement("div", {
    className: "pf-hero-cta"
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-right"
    })
  }, "See selected work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    leadingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "file-text"
    })
  }, "Read the CV"))), /*#__PURE__*/React.createElement("div", {
    className: "pf-portrait"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-portrait-tag"
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "accent",
    solid: true,
    dot: true
  }, "Open to collaborate")), /*#__PURE__*/React.createElement("div", {
    className: "pf-portrait-cap"
  }, "Your photo here"))));
}
function SelectedWork() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-container",
    id: "work"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "flask"
  }), " Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section-title"
  }, "Things I've built & researched")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right"
    })
  }, "All projects")), /*#__PURE__*/React.createElement("div", {
    className: "pf-work-grid"
  }, WORK.map(w => /*#__PURE__*/React.createElement(Card, {
    key: w.title,
    variant: "default",
    interactive: true,
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
      }
    }, /*#__PURE__*/React.createElement(Badge, {
      tone: w.tone
    }, w.badge), /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--text-faint)',
        display: 'inline-flex'
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right"
    })))
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-post-title",
    style: {
      fontSize: 'var(--text-lg)',
      marginBottom: '6px'
    }
  }, w.title), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--text-secondary)',
      fontSize: 'var(--text-sm)',
      lineHeight: 'var(--leading-relaxed)'
    }
  }, w.blurb), /*#__PURE__*/React.createElement("div", {
    className: "pf-tags"
  }, w.tags.map(t => /*#__PURE__*/React.createElement(Tag, {
    key: t
  }, t)))))));
}
function Writing() {
  return /*#__PURE__*/React.createElement("section", {
    className: "pf-section pf-container",
    id: "writing",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "pf-section-head"
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("span", {
    className: "pf-eyebrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "pen-line"
  }), " Writing"), /*#__PURE__*/React.createElement("h2", {
    className: "pf-section-title"
  }, "Recent notes & essays")), /*#__PURE__*/React.createElement(Button, {
    variant: "link",
    trailingIcon: /*#__PURE__*/React.createElement(Icon, {
      name: "arrow-up-right"
    })
  }, "Archive")), /*#__PURE__*/React.createElement("div", {
    className: "pf-writing"
  }, POSTS.map(p => /*#__PURE__*/React.createElement("a", {
    className: "pf-post",
    href: "#",
    key: p.title
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "pf-post-title"
  }, p.title), /*#__PURE__*/React.createElement("div", {
    className: "pf-post-meta"
  }, /*#__PURE__*/React.createElement("span", null, p.cat), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.date), /*#__PURE__*/React.createElement("span", null, "\xB7"), /*#__PURE__*/React.createElement("span", null, p.read))), /*#__PURE__*/React.createElement("span", {
    className: "pf-post-arrow"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "arrow-up-right"
  }))))));
}
function PFHome() {
  return /*#__PURE__*/React.createElement("main", {
    className: "pf"
  }, /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(SelectedWork, null), /*#__PURE__*/React.createElement(Writing, null));
}
window.PFHome = PFHome;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/portfolio/Icons.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
// Icon set — Lucide path data (ISC licensed), copied in for reliability.
// Usage: <Icon name="mail" /> · inherits color (currentColor) and 1.25rem size.
const MM_ICON_PATHS = {
  'arrow-up-right': ['M7 7h10v10', 'M7 17 17 7'],
  'arrow-right': ['M5 12h14', 'm12 5 7 7-7 7'],
  'mail': ['rect:2,4,20,16,2', 'm2 7 8.97 5.7a1.94 1.94 0 0 0 2.06 0L22 7'],
  'github': ['M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.4 5.4 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4', 'M9 18c-4.51 2-5-2-7-2'],
  'linkedin': ['M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z'],
  'map-pin': ['M20 10c0 4.4-8 12-8 12s-8-7.6-8-12a8 8 0 0 1 16 0Z', 'circle:12,10,3'],
  'file-text': ['M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z', 'M14 2v4a2 2 0 0 0 2 2h4', 'M16 13H8', 'M16 17H8', 'M10 9H8'],
  'sparkles': ['M9.94 15.5A2 2 0 0 0 8.5 14.06l-6.14-1.58a.5.5 0 0 1 0-.96L8.5 9.94A2 2 0 0 0 9.94 8.5l1.58-6.14a.5.5 0 0 1 .96 0L14.06 8.5A2 2 0 0 0 15.5 9.94l6.14 1.58a.5.5 0 0 1 0 .96L15.5 14.06a2 2 0 0 0-1.44 1.44l-1.58 6.14a.5.5 0 0 1-.96 0z', 'M20 3v4', 'M22 5h-4'],
  'flask': ['M14 2v6a2 2 0 0 0 .24.96l5.52 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.76-2.96l5.52-10.08A2 2 0 0 0 10 8V2', 'M6.45 15h11.1', 'M8.5 2h7'],
  'book-open': ['M12 7v14', 'M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z'],
  'graduation-cap': ['M21.42 10.92a1 1 0 0 0-.02-1.84L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.83l8.57 3.91a2 2 0 0 0 1.66 0z', 'M22 10v6', 'M6 12.5V16a6 3 0 0 0 12 0v-3.5'],
  'calendar': ['M8 2v4', 'M16 2v4', 'rect:3,4,18,18,2', 'M3 10h18'],
  'quote': ['M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z', 'M6 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2.5a.5.5 0 0 1 .5.5v.5a2 2 0 0 1-2 2 1 1 0 0 0 0 2 4 4 0 0 0 4-4V5a2 2 0 0 0-2-2z'],
  'external-link': ['M15 3h6v6', 'M10 14 21 3', 'M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6'],
  'download': ['M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4', 'M7 10l5 5 5-5', 'M12 15V3'],
  'pen-line': ['M12 20h9', 'M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z'],
  'microscope': ['M6 18h8', 'M3 22h18', 'M14 22a7 7 0 1 0 0-14h-1', 'M9 14h2', 'M9 12a2 2 0 0 1-2-2V6h6v4a2 2 0 0 1-2 2Z', 'M12 6V3a1 1 0 0 0-1-1H9'],
  'chevron-right': ['m9 18 6-6-6-6'],
  'check': ['M20 6 9 17l-5-5']
};
function Icon({
  name,
  size,
  className = '',
  ...rest
}) {
  const parts = MM_ICON_PATHS[name] || [];
  const s = size ? {
    width: size,
    height: size
  } : undefined;
  return /*#__PURE__*/React.createElement("svg", _extends({
    className: className,
    style: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, rest), parts.filter(Boolean).map((d, i) => {
    if (d.startsWith('circle:')) {
      const [cx, cy, r] = d.slice(7).split(',');
      return /*#__PURE__*/React.createElement("circle", {
        key: i,
        cx: cx,
        cy: cy,
        r: r
      });
    }
    if (d.startsWith('rect:')) {
      const [x, y, w, h, rx] = d.slice(5).split(',');
      return /*#__PURE__*/React.createElement("rect", {
        key: i,
        x: x,
        y: y,
        width: w,
        height: h,
        rx: rx
      });
    }
    return /*#__PURE__*/React.createElement("path", {
      key: i,
      d: d.startsWith('M') || d.startsWith('m') ? d : 'M' + d
    });
  }));
}
window.Icon = Icon;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/portfolio/Icons.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarGroup = __ds_scope.AvatarGroup;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.ToastViewport = __ds_scope.ToastViewport;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Field = __ds_scope.Field;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Navbar = __ds_scope.Navbar;

__ds_ns.NavLink = __ds_scope.NavLink;

__ds_ns.NavLinks = __ds_scope.NavLinks;

__ds_ns.NavSpacer = __ds_scope.NavSpacer;

__ds_ns.NavActions = __ds_scope.NavActions;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.ThemeToggle = __ds_scope.ThemeToggle;

})();

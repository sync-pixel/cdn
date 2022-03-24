/*!
 * FilePondPluginImagePreview 4.6.4
 * Licensed under MIT, https://opensource.org/licenses/MIT/
 * Please visit https://pqina.nl/filepond/ for details.
 */

/* eslint-disable */
.filepond--image-preview-markup{position:absolute;left:0;top:0}.filepond--image-preview-wrapper{z-index:2}.filepond--image-preview-overlay{display:block;position:absolute;left:0;top:0;width:100%;min-height:5rem;max-height:7rem;margin:0;opacity:0;z-index:2;pointer-events:none;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.filepond--image-preview-overlay svg{width:100%;height:auto;color:inherit;max-height:inherit}.filepond--image-preview-overlay-idle{mix-blend-mode:multiply;color:rgba(40,40,40,.85)}.filepond--image-preview-overlay-success{mix-blend-mode:normal;color:#369763}.filepond--image-preview-overlay-failure{mix-blend-mode:normal;color:#c44e47}@supports (-webkit-marquee-repetition:infinite) and ((-o-object-fit:fill) or (object-fit:fill)){.filepond--image-preview-overlay-idle{mix-blend-mode:normal}}.filepond--image-preview-wrapper{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;position:absolute;left:0;top:0;right:0;height:100%;margin:0;border-radius:.45em;overflow:hidden;background:rgba(0,0,0,.01)}.filepond--image-preview{position:absolute;left:0;top:0;z-index:1;display:flex;align-items:center;height:100%;width:100%;pointer-events:none;background:#222;will-change:transform,opacity}.filepond--image-clip{position:relative;overflow:hidden;margin:0 auto}.filepond--image-clip[data-transparency-indicator=grid] canvas,.filepond--image-clip[data-transparency-indicator=grid] img{background-color:#fff;background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg' fill='%23eee'%3E%3Cpath d='M0 0h50v50H0M50 50h50v50H50'/%3E%3C/svg%3E");background-size:1.25em 1.25em}.filepond--image-bitmap,.filepond--image-vector{position:absolute;left:0;top:0;will-change:transform}.filepond--root[data-style-panel-layout~=integrated] .filepond--image-preview-wrapper{border-radius:0}.filepond--root[data-style-panel-layout~=integrated] .filepond--image-preview{height:100%;display:flex;justify-content:center;align-items:center}.filepond--root[data-style-panel-layout~=circle] .filepond--image-preview-wrapper{border-radius:99999rem}.filepond--root[data-style-panel-layout~=circle] .filepond--image-preview-overlay{top:auto;bottom:0;-webkit-transform:scaleY(-1);transform:scaleY(-1)}.filepond--root[data-style-panel-layout~=circle] .filepond--file .filepond--file-action-button[data-align*=bottom]:not([data-align*=center]){margin-bottom:.325em}.filepond--root[data-style-panel-layout~=circle] .filepond--file [data-align*=left]{left:calc(50% - 3em)}.filepond--root[data-style-panel-layout~=circle] .filepond--file [data-align*=right]{right:calc(50% - 3em)}.filepond--root[data-style-panel-layout~=circle] .filepond--progress-indicator[data-align*=bottom][data-align*=left],.filepond--root[data-style-panel-layout~=circle] .filepond--progress-indicator[data-align*=bottom][data-align*=right]{margin-bottom:.5125em}.filepond--root[data-style-panel-layout~=circle] .filepond--progress-indicator[data-align*=bottom][data-align*=center]{margin-top:0;margin-bottom:.1875em;margin-left:.1875em}
// tips: use some plugin like atom-typescript to highlight html templates inside backticks
export const richTextTemplate = {
  template: `
  <text-angular
    name="{{id}}"
    class="richTextAngular"
    ng-model="model[options.key || index]">
  </text-angular>
  `
};

/* eslint-disable quotes */
export const blankTemplate = {
  template: `<div></div>`
};
/* eslint-enable quotes */

export const headerTemplate = {
  template: `
    <div class="row">
      <div class="">
        <h2 class="text-center">
          {{ options.templateOptions.placeholder }}
        </h2>
        <hr/>
      </div>
    </div>
    `
};

export const subTitleTemplate = {
  template: `
    <div class="row">
      <div class="">
        <h4 class="text-center">
          {{ options.templateOptions.placeholder }}
        </h4>
        <hr/>
      </div>
    </div>
    `
};

export const basicSelectTemplate = {
  template: `
    <ol
      class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
      ng-model="model[options.key || index]"
      id="{{id}}"
      disabled="options.templateOptions.options.length === 0">
      <li
        class="nya-bs-option"
        nya-bs-option="option in options.templateOptions.options">
        <a>
          {{option.name}}
        </a>
      </li>
    </ol>
  `
};

export const oldgroupedSelectTemplate = {
  template: `
    <ol
      class="nya-bs-select col-sm-12 col-xs-12 col-md-12 col-lg12"
      ng-model="model[options.key || index]"
      data-live-search="true"
      disabled="options.templateOptions.options.length === 0">
      <li nya-bs-option="option in  options.templateOptions.options group by option.group">
        <span class="dropdown-header">
          {{$group}}
        </span>
        <a>
          <span>
            {{option.name}}
          </span>
          <span class="glyphicon glyphicon-ok check-mark"></span>
        </a>
      </li>
    </ol>
    `
};

export const groupedSelectTemplate = {
  template: `  
  <select multiple id="{{generatedId}}"  class="js-example-basic-multiple col-sm-12 col-xs-12 col-md-12 col-lg12"
  ng-model="model[options.key]"
  ng-disabled="DisplayOptions.length == 0">
  <div>
  <optgroup ng-repeat="group in DisplayOptions" label="{{group.group}}">
  <option ng-repeat="option in group.options" value="{{option}}" >
  {{option}}
  </option>
  </optgroup>
  </div>
  </select>   
   
  `
};

export const repeatSectionTemplate = {
  template: `     
      	<div>
          <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="elemfields = copyFields(fields)">
            <formly-form fields="elemfields"
                         model="element"
                         form="form">
            </formly-form>
            <div style="margin-bottom:20px;">
              <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                Remove
              </button>
            </div>
            <hr>
        </div>
        <p class="AddNewButton">
  	      <button type="button" class="btn btn-primary" ng-click="addNew()" >{{btnText}}</button>
        </p>
      </div>
  `
};


export const editRepeatSectionTemplate = {
  template: `   
      	<div ng-if="options && options.key==='investments'">
          <div class="repeatsection" ng-repeat="element in model[options.key]" ng-init="elemfields = copyFields(to.fields)">
            <formly-form fields="elemfields"
                         model="element"
                         form="form">
            </formly-form>
            <div style="margin-bottom:20px;">
              <button type="button" class="btn btn-sm btn-danger" ng-click="model[options.key].splice($index, 1)">
                Remove
              </button>
            </div>
            <hr>
        </div>
        <p class="AddNewButton">
  	      <button type="button" class="btn btn-primary" ng-click="addNew()" >{{to.btnText}}</button>
        </p>
      </div>
  `
};


export const datepickerTemplate = {
  template: `
    <p class="input-group">
      <span class="input-group-btn">
        <button
          type="button"
          class="btn btn-default"
          ng-click="datepicker.open($event)">
          <i class="glyphicon glyphicon-calendar"></i>
        </button>
      </span>
      <input
        type="text"
        id="{{::id}}"
        name="{{::id}}"
        ng-model="model[options.key]"
        class="form-control"
        ng-click="datepicker.open($event)"
        uib-datepicker-popup="{{to.datepickerOptions.format}}"
        is-open="datepicker.opened"
        datepicker-options="to.datepickerOptions"
      />
    </p>
  `
};

export const datetimepickerTemplate = {
  template: `
  <p class="input-group">
  <span class="input-group-btn">
    <button
      type="button"
      class="btn btn-default">
      <i class="glyphicon glyphicon-calendar"></i>
    </button>
  </span>
  <input
      id="{{::id}}"
      name="{{::id}}"
        type="text"
        ng-model="model[options.key]"
        class="form-control"
  />
</p>
  `
};

export const validationTemplate = {
  template: `
    <div
      class="formly-template-wrapper form-group"
      ng-class="{\'has-error\': options.validation.errorExistsAndShouldBeVisible}">
      <formly-transclude></formly-transclude>
      <div
        class="validation"
        ng-if="options.validation.errorExistsAndShouldBeVisible"
        ng-messages="options.formControl.$error">
        <div ng-messages-include="validation.html"></div>
        <div
          ng-message="{{::name}}"
          ng-repeat="(name, message) in ::options.validation.messages">
          {{message(options.formControl.$viewValue, options.formControl.$modelValue, this)}}
        </div>
      </div>
    </div>
  `
};
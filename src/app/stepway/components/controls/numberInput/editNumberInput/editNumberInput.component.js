export const EDIT_NUMBERINPUT_COMPONENT = 'editNumberInputControl';

export const editNumberInputControlComponent = {
  template: `
    <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="greyText">
            <i class="fa fa-eye"></i>
            &nbsp;
            {{'PREVIEW_TAB' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label
              for="inputNumberInput"
              class="control-label textControlLabel">
              {{$ctrl.nyaSelect.temporyConfig.formlyLabel}}
              <span
                ng-if="$ctrl.nyaSelect.temporyConfig.formlyRequired"
                class="textControlLabel">
                *
              </span>
            </label>
            <div class="">
              <input
                type="number"
                class="form-control"
                id="inputNumberInput"
                placeholder="{{$ctrl.nyaSelect.temporyConfig.formlyPlaceholder}}">
              <p class="help-block">
                {{$ctrl.nyaSelect.temporyConfig.formlyDescription}}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="panel panel-default">
    <div class="panel-body">
      <div class="row">
        <div class="col-md-12">
          <h5 class="greyText">
            <i class="fa fa-pencil-square-o"></i>
            &nbsp;
            {{'EDIT_PROPERTIES' | translate}} :
          </h5>
        </div>
      </div>
      <hr/>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextLabelUpdate"
            class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'LABEL_TEXT' | translate}} :
          </label>
          <div class="col-lg-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyLabel"
              id="inputTextLabelUpdate"
              placeholder="{{'ADD_EDIT_LABEL_HERE' | translate}}">
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextplaceholderUpdate"
            class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'PLACEHOLDER' | translate}} :
          </label>
          <div class="col-lg-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyPlaceholder"
              id="inputTextplaceholderUpdate"
              placeholder="{{'ADD_EDIT_PLACEHOLD' | translate}}">
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextRequiredUpdate"
            class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'REQUIRED' | translate}} :
          </label>
          <div class="col-lg-9">
            <div class="checkboxCssCorrection">
              &nbsp;
            </div>
            <input
              type="checkbox"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyRequired"
              id="inputTextRequiredUpdate">
          </div>
        </div>
      </div>
      <div class="marginTopFivepixels"></div>
      <div class="row">
        <div class="form-group">
          <label
            for="inputTextDescriptionUpdate"
            class="col-lg-3 control-label greyText editPropertiesLabel">
            {{'DESCRIPTION' | translate}} :
          </label>
          <div class="col-lg-9">
            <input
              type="text"
              class="form-control"
              ng-model="$ctrl.nyaSelect.temporyConfig.formlyDescription"
              id="inputTextDescriptionUpdate"
              placeholder="{{'ADDEDIT_DESCRIPTION' | translate}}">
          </div>
        </div>
      </div>
    </div>
  </div>
  `,
  bindings: {
    nyaSelect: '='
  },
  controller:
  class editNumberInputControlController {
    static $inject = [];
    constructor() {

    }
  }
};

const editNumberInputModuleName = 'stepway.editNumberInput.module';

export default angular
                .module(editNumberInputModuleName, [])
                .component(EDIT_NUMBERINPUT_COMPONENT, editNumberInputControlComponent);

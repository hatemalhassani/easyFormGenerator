
export const EDIT_REPEAT_SECTION_CONTROL_COMPONENT = 'editRepeatSectionControl';

export const editRepeatSectionControlComponent = {
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
          <div>                                  
          <div class="">         
          <formly-form fields="$ctrl.repeatSectionFields"
                       model="$ctrl.repeatSectionModel"
                       form="$ctrl.form">
          </formly-form>                    
          </div>                      
          </div>
        </div>
      </div>
    </div>    
  </div>
  `,
  bindings: {
    nyaSelect: '=',
    vm: '=',
    repeatSectionModel: '=',
    repeatSectionOptions: '=',
    repeatSectionFields: '=',
    repeatSectionForm: '=',
    addNewRepeatSection: '='
  },
  controller:
    class editRepeatSectionControlController {
      static $inject = [];
      constructor() {
        var vm = this;
        this.vm = vm;
        vm.copyRepeatSectionFields = (fields, index) => {
          fields = angular.copy(fields);
          vm.addRandomIds(fields, index);
          return fields;
        }
        vm.addRandomIds = (fields, index) => {
          angular.forEach(fields, function (field, _index) {
            if (field.fieldGroup) {
              vm.addRandomIds(field.fieldGroup);
              return; // fieldGroups don't need an ID
            }

            if (field.templateOptions && field.templateOptions.fields) {
              vm.addRandomIds(field.templateOptions.fields);
            }

            field.id = field.id || (field.key + '_' + _index + '_' + index + '_' + vm.getRandomInt(0, 9999));
          });
        }

        vm.getRandomInt = (min, max) => {
          return Math.floor(Math.random() * (max - min)) + min;
        }
      }

    }
};

const editRepeatSectionModuleName = 'stepway.editRepeatSectionControl.module';

export default angular
  .module(editRepeatSectionModuleName, [])
  .component(EDIT_REPEAT_SECTION_CONTROL_COMPONENT, editRepeatSectionControlComponent);


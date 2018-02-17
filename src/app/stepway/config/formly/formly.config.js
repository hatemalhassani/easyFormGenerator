import {
    richTextTemplate,
    blankTemplate,
    headerTemplate,
    subTitleTemplate,
    basicSelectTemplate,
    groupedSelectTemplate,
    // multiSelectTemplate,
    repeatSectionTemplate,
    editRepeatSectionTemplate,
    datepickerTemplate,
    datetimepickerTemplate,
    validationTemplate
} from './formly.config.templates';
import { debug } from 'util';


function formlyConfig(formlyConfigProvider) {
    formlyConfigProvider.setType({
        name: 'richEditor',
        template: richTextTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });

    formlyConfigProvider.setType({
        name: 'blank',
        template: blankTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'header',
        template: headerTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'subTitle',
        template: subTitleTemplate.template
    });

    formlyConfigProvider.setType({
        name: 'basicSelect',
        template: basicSelectTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError']
    });



    formlyConfigProvider.setType({
        name: 'groupedSelect',
        template: groupedSelectTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        link: function (scope, element, attrs, ngModelCtrl) {
            console.log(element, scope);
            window.setTimeout(function () {
                const all = $(element).find("select#" + $(element).find("select").attr("id"));
                const select = $(element).find("select");
                const sel = select.select2({ width: '100%' });
                sel.on('select2:select', function (e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
                sel.on('select2:unselect', function (e) {
                    scope.model[scope.options.key] = sel.val();
                    scope.$apply();
                });
            }, 10);
        },
        controller: function ($scope) {
            $scope.generatedId = "multiselect_" + new Date().getMilliseconds() + '_' + getRandomInt(100, 1000000);
            const _groups = $scope.options.templateOptions.options
                .sort(function (a, b) {
                    if (a.order > b.order) {
                        return 1;
                    }
                    if (a.order < b.order) {
                        return -1;
                    }
                    return 0;
                }).reduce((groups, option) => {
                    if (!(option.group in groups)) {
                        groups[option.group] = [];
                    }
                    groups[option.group].push(option.option);
                    return groups;
                }, {});
            $scope.DisplayOptions = Object.keys(_groups).map(k => Object.assign({}, {
                group: k,
                options: _groups[k]
            }))

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });
    formlyConfigProvider.setType({
        name: 'repeatSection',
        template: repeatSectionTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            let unique = 0;
            $scope.fields = [];
            if ($scope.options.templateOptions.options && $scope.options.templateOptions.options.length > 0) {
                $scope.model[$scope.options.key] = $scope.options.templateOptions.options[0];
            }
            if ($scope.options.templateOptions.options && $scope.options.templateOptions.options.length > 1) {
                $scope.fields = $scope.options.templateOptions.options[1].fields;
                $scope.btnText = $scope.options.templateOptions.options[1].btnText;
            }

            $scope.copyFields = copyFields;
            $scope.addNew = addNew;
            function copyFields(fields) {
                fields = angular.copy(fields);
                addRandomIds(fields);
                return fields;
            }
            function addNew() {
                $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                var repeatsection = $scope.model[$scope.options.key];
                var lastSection = repeatsection[repeatsection.length - 1];
                var newsection = {};
                if (lastSection) {
                    newsection = angular.copy(lastSection);
                }
                repeatsection.push(newsection);
            }
            function addRandomIds(fields) {
                unique++;
                angular.forEach(fields, function (field, index) {
                    if (field.fieldGroup) {
                        addRandomIds(field.fieldGroup);
                        return; // fieldGroups don't need an ID
                    }

                    if (field.templateOptions && field.templateOptions.fields) {
                        addRandomIds(field.templateOptions.fields);
                    }

                    field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                });
            }

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });
    formlyConfigProvider.setType({
        name: 'editRepeatSection',
        template: editRepeatSectionTemplate.template,
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: function ($scope) {
            let unique = 0;
            $scope.copyFields = copyFields;
            $scope.addNew = addNew;
            function copyFields(fields) {
                fields = angular.copy(fields);
                addRandomIds(fields);
                return fields;
            }
            function addNew() {
                $scope.model[$scope.options.key] = $scope.model[$scope.options.key] || [];
                var repeatsection = $scope.model[$scope.options.key];
                var lastSection = repeatsection[repeatsection.length - 1];
                var newsection = {};
                if (lastSection) {
                    newsection = angular.copy(lastSection);
                }
                repeatsection.push(newsection);
            }
            function addRandomIds(fields) {
                unique++;
                angular.forEach(fields, function (field, index) {
                    if (field.fieldGroup) {
                        addRandomIds(field.fieldGroup);
                        return; // fieldGroups don't need an ID
                    }

                    if (field.templateOptions && field.templateOptions.fields) {
                        addRandomIds(field.templateOptions.fields);
                    }

                    field.id = field.id || (field.key + '_' + index + '_' + unique + getRandomInt(0, 9999));
                });
            }

            function getRandomInt(min, max) {
                return Math.floor(Math.random() * (max - min)) + min;
            }
        }
    });

    ////////////////////////////
    // angular UI date picker
    ////////////////////////////
    // thx Kent C. Dodds

    const attributes = [
        'date-disabled',
        'custom-class',
        'show-weeks',
        'starting-day',
        'init-date',
        'min-mode',
        'max-mode',
        'format-day',
        'format-month',
        'format-year',
        'format-day-header',
        'format-day-title',
        'format-month-title',
        'year-range',
        'shortcut-propagation',
        'datepicker-popup',
        'show-button-bar',
        'current-text',
        'clear-text',
        'close-text',
        'close-on-date-selection',
        'datepicker-append-to-body'
    ];

    const bindings = [
        'datepicker-mode',
        'min-date',
        'max-date'
    ];

    const ngModelAttrs = {};
    angular.forEach(attributes, (attr) => {
        ngModelAttrs[camelize(attr)] = { attribute: attr };
    });

    angular.forEach(bindings, (binding) => {
        ngModelAttrs[camelize(binding)] = { bound: binding };
    });

    formlyConfigProvider.setType({
        name: 'datepicker',
        template: datepickerTemplate.template,
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datepickerOptions: {
                    format: 'dd/MM/yyyy',
                    initDate: new Date(),
                    showWeeks: false
                }
            }
        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        controller: ['$scope', ($scope) => {
            $scope.datepicker = {};
            // make sure the initial value is of type DATE!
            var currentModelVal = $scope.model[$scope.options.key];
            if (typeof (currentModelVal) == 'string') {
                $scope.model[$scope.options.key] = new Date(currentModelVal);
            }
            $scope.datepicker.opened = false;
            $scope.datepicker.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.datepicker.opened = !$scope.datepicker.opened;
            };
        }]
    });
    formlyConfigProvider.setType({
        name: 'datetimepicker',
        template: datetimepickerTemplate.template,
        defaultOptions: {
            ngModelAttrs: ngModelAttrs,
            templateOptions: {
                datetimepickerOptions: {
                    format: 'DD/MM/YYYY hh:mm:ss',
                    initDate: new Date(),
                    showWeeks: false
                }
            }
        },
        wrapper: ['bootstrapLabel', 'bootstrapHasError'],
        link: function (scope, element, attrs, ngModelCtrl) {
            const parent = $(element).parent();
            const datepickerDiv = $(element).find(".input-group input");
            window.setTimeout(function () {
                // const currentModelVal = scope.model[scope.options.key];
                // if (!currentModelVal || typeof (currentModelVal) == 'string') {
                //     scope.model[scope.options.key] = moment(new Date(currentModelVal)).format(scope.options.templateOptions.
                //         datetimepickerOptions.format);
                //     scope.$apply();
                // }
                const dtp = datepickerDiv.datetimepicker({
                    format: scope.options.templateOptions.
                        datetimepickerOptions.format
                });
                // const dtp = parent.datetimepicker();
                dtp.on("dp.change", function (e) {
                    scope.model[scope.options.key] = moment(e.date).format(scope.options.templateOptions.
                        datetimepickerOptions.format);
                    scope.$apply();
                });
            }, 100);
        },
        controller: ['$scope', ($scope) => {

            $scope.datetimepicker = {};
            // make sure the initial value is of type DATE!
            const currentModelVal = $scope.model[$scope.options.key] || '';
            if (typeof (currentModelVal) == 'string') {
                $scope.model[$scope.options.key] = moment(new Date(currentModelVal)).format($scope.options.templateOptions.
                    datetimepickerOptions.format);
            }
            $scope.datetimepicker.opened = false;
            $scope.datetimepicker.open = function ($event) {
                $event.preventDefault();
                $event.stopPropagation();
                $scope.datetimepicker.opened = !$scope.datepicker.opened;
            };
        }]
    });

    /**
     * wrappers to show validation errors
     * without having to rewrite formly types
     */
    formlyConfigProvider.setWrapper([{
        template: validationTemplate.template
    }]);

    function camelize(string) {
        string = string.replace(/[\-_\s]+(.)?/g, function (match, chr) {
            return chr ? chr.toUpperCase() : '';
        });
        // Ensure 1st char is always lowercase
        return string.replace(/^([A-Z])/, function (match, chr) {
            return chr ? chr.toLowerCase() : '';
        });
    }
}

formlyConfig.$inject = ['formlyConfigProvider'];

export default formlyConfig;

![Example use of custom radio component](https://i.imgur.com/bvR7Cnc.gif)
## Angular Custom Radio Component
This app contains custom radio input component created in Angular.  Check out the live[demo](https://dawidzawada.github.io/angular-custom-radio-component/).
Keep in mind that styling is purely optional.

The radio component is fully supported by Angular Forms. Also allows to nest other elements/components and disable in 2 ways: 
 - with **disabled** input property - used on at least single group element  - disable whole radio group
 -  with **inactive** input property - disable **only** single radio element 
 
 
### Example of use:

#### Form model:
    model = {
        radiotest: 'o2',
    };

  

#### Template:
    <app-radio [(ngModel)]="model.radiotest" [value]="'o1'" name="radiotest"> LABEL 1 </app-radio>
    <app-radio [(ngModel)]="model.radiotest" [value]="'o2'" name="radiotest"> LABEL 2 </app-radio>
    <app-radio [(ngModel)]="model.radiotest" [value]="'o3'" name="radiotest" [inactive]="true"> LABEL 3 </app-radio>

  

 - **inputId** - ID applyied to input element
 - **name** - name property applyied to input element, needed for form to work correctly
 - **value** - value of radio
 - **inactive** - property for disabling single radio element instead of whole group - [attr.disabled] hack
  - **disabled** - property for disabling whole radio group, every app-radio element with the - same model will be disabled, only one element need to contain [disabled]="true" to disable whole model group, this prop have higher priority over **inactive** prop

**disabled** property template use example:

    <app-radio [(ngModel)]="model.radiotest" [value]="'o1'" name="radiotest"> LABEL 1 </app-radio>
    <app-radio [(ngModel)]="model.radiotest" [value]="'o2'" name="radiotest"> LABEL 2 </app-radio>
    <app-radio [(ngModel)]="model.radiotest" [value]="'o3'" name="radiotest" [disabled]="true"> LABEL 3 </app-radio>

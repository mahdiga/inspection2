import {NgModule, NO_ERRORS_SCHEMA} from '@angular/core';
import {NativeScriptCommonModule} from 'nativescript-angular/common';


import {DropDownModule} from "nativescript-drop-down/angular";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NativeScriptFormsModule, NativeScriptRouterModule} from "nativescript-angular";
import {NativeScriptPickerModule} from "nativescript-picker/angular";
import {TNSCheckBoxModule} from "@nstudio/nativescript-checkbox/angular";
import {ItemModalComponent} from "~/app/inspection-module/tabs/modals/item-modal/item-modal.component";
import {QuestionsModalComponent} from "~/app/inspection-module/tabs/modals/check-list-modal/questions-modal.component";
import {AnswerModalComponent} from "~/app/inspection-module/tabs/modals/check-list-modal/check-list-answer/answer-modal.component";
import {CheckListAnswerPhotoComponent} from "~/app/inspection-module/tabs/modals/check-list-modal/check-list-answer-photo/check-list-answer-photo.component";

import {Routes} from "@angular/router";

import {TabsComponent} from "~/app/inspection-module/tabs/tabs.component";
import {InstanceEditComponent} from "~/app/inspection-module/tabs/instanceComponent/instance-edit.component";
import {InstanceComponent} from "~/app/inspection-module/tabs/instanceComponent/instance.component";
import {InstanceInfoComponent} from "~/app/inspection-module/tabs/instanceInfoComponent/instanceInfo.component";
import {StandardComponent} from "~/app/inspection-module/tabs/standardComponent/standard.component";
import {EquipmentComponent} from "~/app/inspection-module/tabs/equipmentComponent/equipment.component";
import {CheckListComponent} from "~/app/inspection-module/tabs/check-list-component/check-list.component";
import {DefectiveSamplesComponent} from "~/app/inspection-module/tabs/modals/check-list-modal/defectiveSamples/defective-samples.component";
import {InfoComponent} from "~/app/inspection-module/tabs/infoComponent/info.component";
import {ItemComponent} from "~/app/inspection-module/tabs/itemComponent/item.component";
import {InstanceInfoGridComponent} from "~/app/inspection-module/tabs/instanceInfoComponent/instance-info-grid.component";


const tabsRoutes: Routes = [

    { path:'',component:TabsComponent}
];

@NgModule({
    declarations: [

        ItemModalComponent,
        QuestionsModalComponent,
        AnswerModalComponent,
        CheckListAnswerPhotoComponent,
        TabsComponent,
        InstanceComponent,
        InstanceEditComponent,
        InstanceInfoComponent,
        StandardComponent,
        EquipmentComponent,
        EquipmentComponent,
        CheckListComponent,
        DefectiveSamplesComponent,
        InfoComponent,
        ItemComponent,
        InstanceInfoGridComponent
    ],
    imports: [
        NativeScriptCommonModule,
        DropDownModule,
        FormsModule,
        ReactiveFormsModule,
        NativeScriptFormsModule,
        NativeScriptPickerModule,
        TNSCheckBoxModule,
        NativeScriptRouterModule.forChild(tabsRoutes)
    ],
    schemas: [NO_ERRORS_SCHEMA],
    entryComponents:[
        ItemModalComponent,
        QuestionsModalComponent,
        AnswerModalComponent,
        CheckListAnswerPhotoComponent,
        DefectiveSamplesComponent,
        InstanceInfoComponent,
        InstanceInfoGridComponent
    ]
})
export class TabsModule {
}

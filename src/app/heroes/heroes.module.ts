import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { HeroeCompopnent } from './heroe/heroe.component';
import { ListadoComponent } from './listado/listado.component';


@NgModule({

    declarations:[
        HeroeCompopnent,
        ListadoComponent
           ],

    exports: [
        ListadoComponent
    ],
    imports: [
        CommonModule
    ],

})
export class HeroesModule{}
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './menu-headeing/home/home.component';
import { AccountComponent } from './menu-headeing/account/account.component';
import { QueenTabComponent } from './tab-content/queen-tab/queen-tab.component';
import { KingTabComponent } from './tab-content/king-tab/king-tab.component';
import { HeartTabComponent } from './tab-content/heart-tab/heart-tab.component';
import { ModelPopupKingRedComponent } from './model-popup/model-popup-king-red/model-popup-king-red.component';
import { ModelPopupKingGreenComponent } from './model-popup/model-popup-king-green/model-popup-king-green.component';
import { ModelPopupQueenGreenComponent } from './model-popup/model-popup-queen-green/model-popup-queen-green.component';
import { ModelPopupQueenRedComponent } from './model-popup/model-popup-queen-red/model-popup-queen-red.component';
import { ModelPopupHeartGreenComponent } from './model-popup/model-popup-heart-green/model-popup-heart-green.component';
import { ModelPopupHeartRedComponent } from './model-popup/model-popup-heart-red/model-popup-heart-red.component';
import { ModelPopupJackGreenComponent } from './model-popup/model-popup-jack-green/model-popup-jack-green.component';
import { ModelPopupJackRedComponent } from './model-popup/model-popup-jack-red/model-popup-jack-red.component';
import { JackTabComponent } from './tab-content/jack-tab/jack-tab.component';
import { NavigationComponent } from './menu-headeing/navigation/navigation.component';

@NgModule({
  declarations: [HomeComponent,
    QueenTabComponent,
    KingTabComponent,
    HeartTabComponent,
    ModelPopupKingRedComponent,
    ModelPopupKingGreenComponent,
    ModelPopupQueenGreenComponent,
    ModelPopupQueenRedComponent,
    ModelPopupHeartGreenComponent,
    ModelPopupHeartRedComponent,
    ModelPopupJackGreenComponent,
    ModelPopupJackRedComponent,
    JackTabComponent,
    AccountComponent,
    NavigationComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class BettingFrameworkModule { }

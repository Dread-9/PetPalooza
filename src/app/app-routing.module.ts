import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'img-modal',
    loadChildren: () => import('./img-modal/img-modal.module').then(m => m.ImgModalPageModule)
  },
  {
    path: 'search-modal',
    loadChildren: () => import('./search-modal/search-modal.module').then(m => m.SearchModalPageModule)
  },
  {
    path: 'perfil-gato/:id',
    loadChildren: () => import('./perfil-gato/perfil-gato.module').then(m => m.PerfilGatoPageModule)
  },
  {
    path: 'perfil-perro/:id',
    loadChildren: () => import('./perfil-perro/perfil-perro.module').then(m => m.PerfilPerroPageModule)
  },  {
    path: 'welcome-modal',
    loadChildren: () => import('./welcome-modal/welcome-modal.module').then( m => m.WelcomeModalPageModule)
  },

];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

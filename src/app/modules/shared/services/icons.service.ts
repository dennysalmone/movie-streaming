import { Injectable } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { IIcons } from '../interfaces/interfaces';
import { svgIcons } from '../svg-icons/svg-icons';

@Injectable({
  providedIn: 'root'
})
export class IconsService {

  constructor(
    private iconRegistery: MatIconRegistry,
    private sanitazer: DomSanitizer
  ) { }

  public registerIcons(): void {
    this.loadIcons((svgIcons), '../assets/svg');
  }

  private loadIcons(icons: IIcons[], iconUrl: string): void {
    icons.forEach(el => {
      this.iconRegistery.addSvgIcon(el.name, this.sanitazer.bypassSecurityTrustResourceUrl(`${iconUrl}/${el.file}`));
    });
  }


}

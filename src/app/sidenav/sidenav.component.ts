import { animate, state, style, transition, trigger } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, ChangeDetectorRef, Component, inject, Input, OnInit } from '@angular/core';

@Component({
	selector: 'app-sidenav',
	standalone: true,
	imports: [CommonModule],
	templateUrl: './sidenav.component.html',
	styleUrl: './sidenav.component.scss',
	changeDetection: ChangeDetectionStrategy.OnPush,
	animations: [
		trigger('widthToggle', [
			state('in', style({ width: '280px', overflow: 'hidden' })),
			state('out', style({ width: '45px', overflow: 'hidden' })),
			transition('out => in', [animate('400ms ease')]),
			transition('in => out', [animate('400ms ease')]),
		]),
	],
})
export class SidenavComponent implements OnInit {
	@Input() sideNavItems!: any[];
	openSidenavClicked!: boolean;
  changeDetector = inject(ChangeDetectorRef);

	ngOnInit(): void {
		this.openSidenavClicked = false;
	}

	openSidenav() {
		this.openSidenavClicked = !this.openSidenavClicked;
    this.changeDetector.detectChanges();
	}
}

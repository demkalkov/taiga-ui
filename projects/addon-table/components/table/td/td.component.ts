import {
    ChangeDetectionStrategy,
    Component,
    ContentChild,
    HostBinding,
} from '@angular/core';
import {NgControl} from '@angular/forms';

@Component({
    standalone: true,
    selector: 'th[tuiTd], td[tuiTd]',
    template: `
        <ng-content></ng-content>
    `,
    styleUrls: ['./td.style.less'],
    changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TuiTableTd {
    @HostBinding('class._editable')
    @ContentChild(NgControl)
    protected readonly control: unknown;
}

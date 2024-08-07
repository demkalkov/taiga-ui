import type {Signal} from '@angular/core';
import {
    ChangeDetectionStrategy,
    Component,
    Directive,
    HostBinding,
    inject,
    Input,
    ViewEncapsulation,
} from '@angular/core';
import {tuiDirectiveBinding, tuiWithStyles} from '@taiga-ui/cdk/utils/miscellaneous';
import type {TuiOrientation, TuiSizeL, TuiSizeS} from '@taiga-ui/core/types';

import {TUI_GROUP_OPTIONS} from './group.options';

@Component({
    standalone: true,
    template: '',
    styleUrls: ['./group.style.less'],
    encapsulation: ViewEncapsulation.None,
    changeDetection: ChangeDetectionStrategy.OnPush,
    host: {
        class: 'tui-group-styles',
    },
})
class TuiGroupStyles {}

@Directive({
    standalone: true,
    selector: '[tuiGroup]:not(ng-container)',
    host: {
        class: 'tui-group',
        role: 'group',
        '[class.tui-group_orientation_horizontal]': 'orientation === "horizontal"',
        '[class.tui-group_orientation_vertical]': 'orientation === "vertical"',
        '[class.tui-group_radius_large]': 'size === "l"',
    },
})
export class TuiGroup {
    private readonly options = inject(TUI_GROUP_OPTIONS);

    protected readonly nothing = tuiWithStyles(TuiGroupStyles);

    @Input()
    public orientation: TuiOrientation = this.options.orientation;

    @Input()
    @HostBinding('class.tui-group_collapsed')
    public collapsed = this.options.collapsed;

    @Input()
    @HostBinding('class.tui-group_rounded')
    public rounded = this.options.rounded;

    @Input()
    public size: TuiSizeL | TuiSizeS = this.options.size;
}

export function tuiGroupSize(
    signal: Signal<TuiSizeL | TuiSizeS>,
): Signal<TuiSizeL | TuiSizeS> {
    return tuiDirectiveBinding(TuiGroup, 'size', signal);
}

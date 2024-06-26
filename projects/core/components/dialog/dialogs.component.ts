import {CommonModule} from '@angular/common';
import {ChangeDetectionStrategy, Component, inject} from '@angular/core';
import {TuiFocusTrap} from '@taiga-ui/cdk/directives/focus-trap';
import type {TuiPopover} from '@taiga-ui/cdk/services';
import {tuiInjectElement} from '@taiga-ui/cdk/utils/dom';
import {tuiHost} from '@taiga-ui/core/animations';
import {TuiScrollControls, TuiScrollRef} from '@taiga-ui/core/components/scrollbar';
import {PolymorpheusOutlet, PolymorpheusTemplate} from '@taiga-ui/polymorpheus';
import type {Observable} from 'rxjs';

import {TUI_DIALOGS} from './dialog.tokens';

@Component({
    standalone: true,
    selector: 'tui-dialogs',
    imports: [
        CommonModule,
        PolymorpheusOutlet,
        PolymorpheusTemplate,
        TuiFocusTrap,
        TuiScrollControls,
        TuiScrollRef,
    ],
    templateUrl: './dialogs.template.html',
    styleUrls: ['./dialogs.style.less'],
    // So that we do not force OnPush on custom dialogs
    // eslint-disable-next-line @angular-eslint/prefer-on-push-component-change-detection
    changeDetection: ChangeDetectionStrategy.Default,
    animations: [tuiHost],
    host: {
        '(keydown.silent)': 'el.scrollTop = el.scrollHeight / 2',
    },
})
export class TuiDialogs {
    protected readonly el = tuiInjectElement();
    protected readonly dialogs$: Observable<ReadonlyArray<TuiPopover<any, any>>> =
        inject(TUI_DIALOGS);
}

import { storiesOf , moduleMetadata} from '@storybook/angular';

import { AppTicketComponent } from './ticket.component';

import ComponentIntroComponent from '../../../stories/component-intro.component';
import ParametersComponent from '../../../stories/parameters.component';
import ImportsComponent from '../../../stories/imports.component';
import NgModuleComponent from '../../../stories/ngmodule.component';
import { defaultProps } from '../../../../.storybook/helpers';

storiesOf('Components|Ticket', module)
    .addDecorator(
        moduleMetadata({
            declarations: [AppTicketComponent, ParametersComponent, ImportsComponent, NgModuleComponent, ComponentIntroComponent],
        }),
    )
    .add('Intro', () => ({
        template: `
            <app-storybook-component-intro-component
                [imports]="imports"
                [parameters]="parameters"
                [notes]="notes"
            ></app-storybook-component-intro-component>
        `,
        props: {
            imports: [
                {
                    modules: ['TicketModule'],
                    file: '@bellese/angular-design-system',
                    ngmodule: 'imports',
                },
            ],
            parameters: [
                {
                    name: 'id',
                    type: 'string',
                    value: 'Add a unique ID to the ticket',
                },
                {
                    name: 'title',
                    type: 'string',
                    value: 'Used as the title for the ticket',
                },
                {
                    name: 'description',
                    type: 'string',
                    value: 'Used as the description for the ticket',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Used as the aria label for the ticket',
                },
                {
                    name: 'ariaLabel',
                    type: 'string',
                    value: 'Used this for testing ID',
                },
                {
                    name: 'buttonClick',
                    type: 'function',
                    // tslint:disable-next-line: max-line-length
                    value: 'A javascript function that will be called when the ticket is clicked. It takes one argument, which is a click event.',
                },
            ],
            notes: [
                'This component will span the width of the screen, you will need to put it in a grid layout to organize it on the page',
                'Furthermore there is an option to add any content on the right side of the box. You will see that in the example.',
            ]
        },
    }))
    .add('Normal', () => ({
        template: `
            <app-ticket
                dataAutoId = 'testingID'
                [id]="'ticketComp'"
                [title]="'eCQM'"
                [description]="'Track status and validation of EHR patients.'"
                (buttonClick)="handleEvent($event)">
                <img src="../assets/images/performance.svg" width="50px" height="50px" alt="Place holder image">
            </app-ticket>
        `,
        props: defaultProps
    }));
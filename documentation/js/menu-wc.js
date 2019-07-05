'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">@bellese/angular-design-system documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                        <li class="link">
                            <a href="license.html"  data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>LICENSE
                            </a>
                        </li>
                        <li class="link">
                            <a href="dependencies.html" data-type="chapter-link">
                                <span class="icon ion-ios-list"></span>Dependencies
                            </a>
                        </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse" ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AccordionModule.html" data-type="entity-link">AccordionModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AccordionModule-a07a4a74984fa9b9829b6a087130100e"' : 'data-target="#xs-components-links-module-AccordionModule-a07a4a74984fa9b9829b6a087130100e"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AccordionModule-a07a4a74984fa9b9829b6a087130100e"' :
                                            'id="xs-components-links-module-AccordionModule-a07a4a74984fa9b9829b6a087130100e"' }>
                                            <li class="link">
                                                <a href="components/AppAccordionComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppAccordionComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/AlertModule.html" data-type="entity-link">AlertModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AlertModule-39e7bed0a8652e2060b47d35751bc946"' : 'data-target="#xs-components-links-module-AlertModule-39e7bed0a8652e2060b47d35751bc946"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AlertModule-39e7bed0a8652e2060b47d35751bc946"' :
                                            'id="xs-components-links-module-AlertModule-39e7bed0a8652e2060b47d35751bc946"' }>
                                            <li class="link">
                                                <a href="components/AlertComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AlertComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/BarGraphModule.html" data-type="entity-link">BarGraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-BarGraphModule-4a858e5b852bde0032eb3a62f7bc38fc"' : 'data-target="#xs-components-links-module-BarGraphModule-4a858e5b852bde0032eb3a62f7bc38fc"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-BarGraphModule-4a858e5b852bde0032eb3a62f7bc38fc"' :
                                            'id="xs-components-links-module-BarGraphModule-4a858e5b852bde0032eb3a62f7bc38fc"' }>
                                            <li class="link">
                                                <a href="components/BarGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">BarGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ButtonModule.html" data-type="entity-link">ButtonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ButtonModule-d45afef354d41fbe6711b58eaf8fd714"' : 'data-target="#xs-components-links-module-ButtonModule-d45afef354d41fbe6711b58eaf8fd714"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ButtonModule-d45afef354d41fbe6711b58eaf8fd714"' :
                                            'id="xs-components-links-module-ButtonModule-d45afef354d41fbe6711b58eaf8fd714"' }>
                                            <li class="link">
                                                <a href="components/AppButtonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppButtonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CardClusterModule.html" data-type="entity-link">CardClusterModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CardClusterModule-3aabff2e33de292b3c233c8d8508c048"' : 'data-target="#xs-components-links-module-CardClusterModule-3aabff2e33de292b3c233c8d8508c048"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CardClusterModule-3aabff2e33de292b3c233c8d8508c048"' :
                                            'id="xs-components-links-module-CardClusterModule-3aabff2e33de292b3c233c8d8508c048"' }>
                                            <li class="link">
                                                <a href="components/AppCardClusterComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppCardClusterComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CheckBoxModule.html" data-type="entity-link">CheckBoxModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CheckBoxModule-5b47b3e3d8e80facb24b40171b797881"' : 'data-target="#xs-components-links-module-CheckBoxModule-5b47b3e3d8e80facb24b40171b797881"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CheckBoxModule-5b47b3e3d8e80facb24b40171b797881"' :
                                            'id="xs-components-links-module-CheckBoxModule-5b47b3e3d8e80facb24b40171b797881"' }>
                                            <li class="link">
                                                <a href="components/AppCheckBoxComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppCheckBoxComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/CircleGraphModule.html" data-type="entity-link">CircleGraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-CircleGraphModule-88a21853445bc282cb28db4e3455a14b"' : 'data-target="#xs-components-links-module-CircleGraphModule-88a21853445bc282cb28db4e3455a14b"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-CircleGraphModule-88a21853445bc282cb28db4e3455a14b"' :
                                            'id="xs-components-links-module-CircleGraphModule-88a21853445bc282cb28db4e3455a14b"' }>
                                            <li class="link">
                                                <a href="components/AppCircleGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppCircleGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DatePickerModule.html" data-type="entity-link">DatePickerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DatePickerModule-cf7f57b9fbc1cd4d931116e17446d0eb"' : 'data-target="#xs-components-links-module-DatePickerModule-cf7f57b9fbc1cd4d931116e17446d0eb"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DatePickerModule-cf7f57b9fbc1cd4d931116e17446d0eb"' :
                                            'id="xs-components-links-module-DatePickerModule-cf7f57b9fbc1cd4d931116e17446d0eb"' }>
                                            <li class="link">
                                                <a href="components/AppDatepickerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppDatepickerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DownloadQueModule.html" data-type="entity-link">DownloadQueModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DownloadQueModule-ed39f17f74a17d92bf22d195816d7482"' : 'data-target="#xs-components-links-module-DownloadQueModule-ed39f17f74a17d92bf22d195816d7482"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DownloadQueModule-ed39f17f74a17d92bf22d195816d7482"' :
                                            'id="xs-components-links-module-DownloadQueModule-ed39f17f74a17d92bf22d195816d7482"' }>
                                            <li class="link">
                                                <a href="components/DownloadQueComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">DownloadQueComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/DropdownModule.html" data-type="entity-link">DropdownModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-DropdownModule-d260991f3c58acb7b11877a06027c8b1"' : 'data-target="#xs-components-links-module-DropdownModule-d260991f3c58acb7b11877a06027c8b1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-DropdownModule-d260991f3c58acb7b11877a06027c8b1"' :
                                            'id="xs-components-links-module-DropdownModule-d260991f3c58acb7b11877a06027c8b1"' }>
                                            <li class="link">
                                                <a href="components/AppDropDownComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppDropDownComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LineGraphModule.html" data-type="entity-link">LineGraphModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LineGraphModule-38a0f078263cdd4afe39f0457534bd9f"' : 'data-target="#xs-components-links-module-LineGraphModule-38a0f078263cdd4afe39f0457534bd9f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LineGraphModule-38a0f078263cdd4afe39f0457534bd9f"' :
                                            'id="xs-components-links-module-LineGraphModule-38a0f078263cdd4afe39f0457534bd9f"' }>
                                            <li class="link">
                                                <a href="components/AppLineGraphComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppLineGraphComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalModule.html" data-type="entity-link">ModalModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalModule-179be80a9e06bbb35f368f5e46f4a554"' : 'data-target="#xs-components-links-module-ModalModule-179be80a9e06bbb35f368f5e46f4a554"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalModule-179be80a9e06bbb35f368f5e46f4a554"' :
                                            'id="xs-components-links-module-ModalModule-179be80a9e06bbb35f368f5e46f4a554"' }>
                                            <li class="link">
                                                <a href="components/AppModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppModalComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/ModalShellModule.html" data-type="entity-link">ModalShellModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-ModalShellModule-5f162cb994c37383f277b3abbb106c58"' : 'data-target="#xs-components-links-module-ModalShellModule-5f162cb994c37383f277b3abbb106c58"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-ModalShellModule-5f162cb994c37383f277b3abbb106c58"' :
                                            'id="xs-components-links-module-ModalShellModule-5f162cb994c37383f277b3abbb106c58"' }>
                                            <li class="link">
                                                <a href="components/AppModalShellComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppModalShellComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PagingModule.html" data-type="entity-link">PagingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PagingModule-a6164746d221c2ce555f5573394e299f"' : 'data-target="#xs-components-links-module-PagingModule-a6164746d221c2ce555f5573394e299f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PagingModule-a6164746d221c2ce555f5573394e299f"' :
                                            'id="xs-components-links-module-PagingModule-a6164746d221c2ce555f5573394e299f"' }>
                                            <li class="link">
                                                <a href="components/AppPaginationComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppPaginationComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PanelModule.html" data-type="entity-link">PanelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PanelModule-fd551803d44755b6aee650374d2ab2fd"' : 'data-target="#xs-components-links-module-PanelModule-fd551803d44755b6aee650374d2ab2fd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PanelModule-fd551803d44755b6aee650374d2ab2fd"' :
                                            'id="xs-components-links-module-PanelModule-fd551803d44755b6aee650374d2ab2fd"' }>
                                            <li class="link">
                                                <a href="components/AppPanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppPanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlusModule.html" data-type="entity-link">PlusModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlusModule-413aa3cf7d44ae641ad2384b6954baf6"' : 'data-target="#xs-components-links-module-PlusModule-413aa3cf7d44ae641ad2384b6954baf6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlusModule-413aa3cf7d44ae641ad2384b6954baf6"' :
                                            'id="xs-components-links-module-PlusModule-413aa3cf7d44ae641ad2384b6954baf6"' }>
                                            <li class="link">
                                                <a href="components/AppPlusComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppPlusComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SearchFieldModule.html" data-type="entity-link">SearchFieldModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SearchFieldModule-f23b4a662f0112f29e29feaddceee1d2"' : 'data-target="#xs-components-links-module-SearchFieldModule-f23b4a662f0112f29e29feaddceee1d2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SearchFieldModule-f23b4a662f0112f29e29feaddceee1d2"' :
                                            'id="xs-components-links-module-SearchFieldModule-f23b4a662f0112f29e29feaddceee1d2"' }>
                                            <li class="link">
                                                <a href="components/SearchFieldComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SearchFieldComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/SpinnerModule.html" data-type="entity-link">SpinnerModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-SpinnerModule-ba1eb245f5ac7337854ef25d424a947c"' : 'data-target="#xs-components-links-module-SpinnerModule-ba1eb245f5ac7337854ef25d424a947c"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-SpinnerModule-ba1eb245f5ac7337854ef25d424a947c"' :
                                            'id="xs-components-links-module-SpinnerModule-ba1eb245f5ac7337854ef25d424a947c"' }>
                                            <li class="link">
                                                <a href="components/SpinnerComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">SpinnerComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/StarModule.html" data-type="entity-link">StarModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-StarModule-39975e86597438fd400d9917cb157bcd"' : 'data-target="#xs-components-links-module-StarModule-39975e86597438fd400d9917cb157bcd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-StarModule-39975e86597438fd400d9917cb157bcd"' :
                                            'id="xs-components-links-module-StarModule-39975e86597438fd400d9917cb157bcd"' }>
                                            <li class="link">
                                                <a href="components/StarComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StarComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/StarRatingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">StarRatingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TableModule.html" data-type="entity-link">TableModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TableModule-a1a12dbd4b5031df80d1b9648757e740"' : 'data-target="#xs-components-links-module-TableModule-a1a12dbd4b5031df80d1b9648757e740"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TableModule-a1a12dbd4b5031df80d1b9648757e740"' :
                                            'id="xs-components-links-module-TableModule-a1a12dbd4b5031df80d1b9648757e740"' }>
                                            <li class="link">
                                                <a href="components/AppTableComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTableComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppTableDataComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTableDataComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppTableHeaderComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTableHeaderComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppTableModalComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTableModalComponent</a>
                                            </li>
                                            <li class="link">
                                                <a href="components/AppTableRowComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTableRowComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TextFieldModule.html" data-type="entity-link">TextFieldModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TextFieldModule-6929e2020a8778b5c3e02c928f31af74"' : 'data-target="#xs-components-links-module-TextFieldModule-6929e2020a8778b5c3e02c928f31af74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TextFieldModule-6929e2020a8778b5c3e02c928f31af74"' :
                                            'id="xs-components-links-module-TextFieldModule-6929e2020a8778b5c3e02c928f31af74"' }>
                                            <li class="link">
                                                <a href="components/AppTextFieldComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTextFieldComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/TicketModule.html" data-type="entity-link">TicketModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-TicketModule-5bc5c6723a9d3f01f8eac8cab5918bfd"' : 'data-target="#xs-components-links-module-TicketModule-5bc5c6723a9d3f01f8eac8cab5918bfd"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-TicketModule-5bc5c6723a9d3f01f8eac8cab5918bfd"' :
                                            'id="xs-components-links-module-TicketModule-5bc5c6723a9d3f01f8eac8cab5918bfd"' }>
                                            <li class="link">
                                                <a href="components/AppTicketComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppTicketComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse" ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});
import { html } from "@microsoft/fast-element";
import { endTemplate, startTemplate } from "../patterns/start-end";
import { Flyout } from "./flyout";

/**
 * The template for the {@link @microsoft/fast-foundation#(Flyout:class)} component.
 * @public
 */
export const FlyoutTemplate = html<Flyout>`
    ${when(
        x => x.visible,
        html<Flyout>`
            <div>
                ${when(
                    x => x.overlay,
                    html<Flyout>`
                        <div
                            class="overlay"
                            part="overlay"
                            role="presentation"
                            tabindex="-1"
                            @click="${x => x.dismiss()}"
                        ></div>
                    `
                )}
                <fast-anchored-region
                    anchor="${x => x.anchorElement}"
                    vertical-positioning-mode="${x =>
                        x.responsive ? "dynamic" : "uncontrolled"}"
                    horizontal-positioning-mode="${x =>
                        x.responsive ? "dynamic" : "uncontrolled"}"
                    horizontal-default-position="${x => x.getHorizontalPosition()}"
                    vertical-default-position="${x => x.getVerticalPosition()}"
                    horizontal-inset="${x => x.getHorizontalInset()}"
                    vertical-inset="${x => x.getVerticalInset()}"
                    ${ref("anchoredRegion")}
                >
                    <div
                        class="content"
                        part="content"
                        role="dialog"
                        tabindex="${x => (x.isNonFocusableContent() ? "-1" : "0")}"
                        aria-describedBy="${x => x.ariaDescribedby}"
                        aria-labelledby="${x => x.ariaLabelledby}"
                        aria-label="${x => x.ariaLabel}"
                    >
                        <slot></slot>
                    </div>
                </fast-anchored-region>
            </div>
        `
    )}
`;
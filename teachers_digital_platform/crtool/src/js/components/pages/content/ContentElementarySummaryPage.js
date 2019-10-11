import React from "react";

import C from "../../../business.logic/constants";
import SvgIcon from "../../svgs/SvgIcon";
import CriterionScoreBlock from "../summary/CriterionScoreBlock";
import DimensionScoreBlock from "../summary/DimensionScoreBlock";
import DimensionInformation from "../../common/DimensionInformation";
import SaveWorkInformation from "../../common/SaveWorkInformation";

export default class ContentElementarySummaryPage extends React.Component {
    render() {
        return (
            <React.Fragment>
                <hr className="hr
                                u-mb45
                                u-mt30" />
                <h1 tabIndex="0" id={this.props.currentPage + "_dimensionTitle"}>
                    <SvgIcon
                        icon="settings-round"
                        isLarge="true"
                        hasSpaceAfter="true" />
                    Content summary
                </h1>
                <p className="lead-paragraph">
                    Review the scores and your notes for each content criterion. Use the “View or edit responses” link to review or make changes to your answers, if needed.
                </p>
                <p>
                    Then, review the overall score for the content criteria and enter your thoughts about its strengths and weaknesses.
                </p>
                <SaveWorkInformation {...this.props} />
                <button className="a-btn" data-gtm_ignore="true" onClick={(e) => {this.props.printButtonClicked(C.CONTENT_PAGE, true); e.preventDefault();}}>
                    Print or save summary
                </button>
                <DimensionInformation dimensionName={C.CONTENT_PAGE} {...this.props} reviewedOnDate={this.props.distinctiveCompletedDate[C.CONTENT_PAGE]} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="1"
                    criterionName="Criterion 1:  Earning, income, and careers"
                    criterionLead="The curriculum addresses grade-level appropriate topics for earning, income, and careers."
                    criterionExceedsText="Both components were addressed"
                    criterionMeetsText="1 component was addressed"
                    criterionDoesNotMeetText="0 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="2"
                    criterionName="Criterion 2: Saving and investing"
                    criterionLead="The curriculum addresses grade-level appropriate topics for saving and investing."
                    criterionExceedsText="All 4 components were addressed"
                    criterionMeetsText="3 components were addressed"
                    criterionDoesNotMeetText="Less than 3 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />


                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="3"
                    criterionName="Criterion 3: Spending"
                    criterionLead="The curriculum addresses grade-level appropriate topics for spending."
                    criterionExceedsText="5 or more components were addressed"
                    criterionMeetsText="4 components were addressed"
                    criterionDoesNotMeetText="Less than 4 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="4"
                    criterionName="Criterion 4: Borrowing and credit"
                    criterionLead="The curriculum addresses grade-level appropriate topics for borrowing and credit."
                    criterionExceedsText="Both components were addressed"
                    criterionMeetsText="1 component was addressed"
                    criterionDoesNotMeetText="0 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={true}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="5"
                    criterionName="Criterion 5: Managing financial risk"
                    criterionLead="The curriculum addresses grade-level appropriate topics for managing potential financial risk, including insurance."
                    criterionExceedsText="Both components were addressed"
                    criterionMeetsText="1 component was addressed"
                    criterionDoesNotMeetText="0 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />

                <CriterionScoreBlock
                    showExceeds={false}
                    showBeneficial={false}
                    dimensionKey="content-elementary-crt-"
                    dimensionPage={C.CONTENT_PAGE}
                    criterionNumber="6"
                    criterionName="Criterion 6: Financial responsibility and money management"
                    criterionLead="The curriculum addresses grade-level appropriate topics for financial responsibility, money management, and financial decisions."
                    criterionMeetsText="1 component was addressed"
                    criterionDoesNotMeetText="0 components were addressed"
                    essentialAnswerTotalText="<b>Your answers for these components:</b>"
                    {...this.props} />

                <hr className="hr u-mb45 u-mt30" />

                <DimensionScoreBlock
                    dimensionPage={C.CONTENT_PAGE}
                    dimensionKey="content-elementary-crt-"
                    dimensionName="Content"
                    dimensionLead="How does this curriculum meet the criteria for content:"
                    strongText="All 6 criteria were met and at least one was exceeded"
                    moderateText="All 6 criteria were met"
                    limitedText="At least one criterion was not met"
                    {...this.props} />
            </React.Fragment>
        );
    }
}

import * as Scrivito from 'scrivito'

const TeamCardContainerWidget = Scrivito.provideWidgetClass('TeamCardContainerWidget', {
  attributes: {
    content: ['widgetlist', { only: "TeamCardWidget" }],
  }
})

export default TeamCardContainerWidget

import {ListItem, DirectionButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {gradientDirectionDetails, isActive, clickGradientDirectionItem} = props
  const {displayText, value} = gradientDirectionDetails
  const clickGradientDirectionsItem = () => {
    clickGradientDirectionItem(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        type="button"
        onClick={clickGradientDirectionsItem}
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}
export default GradientDirectionItem

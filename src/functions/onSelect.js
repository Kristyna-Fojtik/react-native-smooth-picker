export default function(
  nativeEvent,
  selected,
  options,
  handleSelection,
  scrollPosition,
  horizontal
) {
  const cursor = horizontal
    ? nativeEvent.contentOffset.x
    : nativeEvent.contentOffset.y;
  
  if(scrollPosition === null) {
    if(options[selected]) {
      const option = options[selected];
      scrollPosition = horizontal ? option.left : option.top;
    }
  }

  const direction = horizontal
    ? scrollPosition > cursor
      ? "right"
      : "left"
    : scrollPosition > cursor
    ? "down"
    : "top";

  switch (direction) {
    case "left":
      if (options[selected + 1]) {
        if (cursor > options[selected].right) {
          handleSelection(
            options[selected + 1].item,
            options[selected + 1].index,
            cursor
          );
        }
      }
      break;
    case "right":
      if (options[selected - 1]) {
        if (cursor < options[selected].left) {
          handleSelection(
            options[selected - 1].item,
            options[selected - 1].index,
            cursor
          );
        }
      }
      break;
    case "top":
      if (options[selected + 1]) {
        let index = 1
        while (cursor > options[selected].bottom){
          index =+ 1
        }
        // if (cursor > options[selected].bottom) {
          handleSelection(
            options[selected + index].item,
            options[selected + index].index,
            cursor
          );
        // }
      }
      break;
    case "down":
      if (options[selected - 1]) {
        let index = 1
        while (cursor < options[selected].top){
          index =+ 1
        }
        // if (cursor < options[selected].top) {
          handleSelection(
            options[selected - index].item,
            options[selected - index].index,
            cursor
          );
        // }
      }
      break;
    default:
      break;
  }
}

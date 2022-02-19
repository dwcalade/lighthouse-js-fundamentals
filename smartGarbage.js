function smartGarbage(trash, bins) {
  let type = {
    waste: bins.waste,
    recycling: bins.recycling,
    compost: bins.compost
  };
  switch (trash) {
  case 'waste':
    type.waste++;
    break;
  case 'recycling':
    type.recycling++;
    break;
  case 'compost':
    type.compost++;
    break;
  default:
    break;
  }
  return type;
}

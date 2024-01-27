#!/bin/bash

source "$CONFIG_DIR/icons.sh"
source "$CONFIG_DIR/colors.sh"

BATTERY_INFO="$(pmset -g batt)"
PERCENTAGE=$(echo "$BATTERY_INFO" | grep -Eo "\d+%" | cut -d% -f1)
CHARGING=$(echo "$BATTERY_INFO" | grep 'AC Power')

if [ $PERCENTAGE = "" ]; then
  exit 0
fi

DRAWING=on
COLOR=$WHITE
case ${PERCENTAGE} in
  9[0-9]|100) ICON=$BATTERY_100; COLOR=$GREEN #90-100%
  ;;
  [6-8][0-9]) ICON=$BATTERY_75; COLOR=$WHITE #60-89%
  ;;
  [3-5][0-9]) ICON=$BATTERY_50; COLOR=$YELLOW #35-59%
  ;;
  [1-2][0-9]) ICON=$BATTERY_25; COLOR=$ORANGE #10-29%
  ;;
  *) ICON=$BATTERY_0; COLOR=$RED #0-9%
esac

if [[ $CHARGING != "" ]]; then
  ICON=$BATTERY_CHARGING
  COLOR=$GREEN
  DRAWING=on
fi

sketchybar --set $NAME drawing=$DRAWING icon="$ICON" icon.color=$COLOR

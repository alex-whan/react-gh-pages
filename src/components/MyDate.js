import React from "react"

function MyDate() {
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;
  const styles = {
    fontSize: 30
  }

  if (hours < 12) {
    timeOfDay = "morning"
    styles.color = "yellow"
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon"
    styles.color = "cyan"
  } else {
    timeOfDay = "night"
    styles.color = "purple"
  }

  return (
    <div>
      <h2 style={styles}>Good {timeOfDay}!</h2>
    </div>
  )
}

export default MyDate
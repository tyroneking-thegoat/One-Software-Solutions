import React, { useState } from 'react';
import { PieChart } from 'react-minimal-pie-chart';
import './calorieswidget.css';

const GoalItem = ({ label, value, unit, goal, color }) => {
  const handleClick = () => {
    console.log(`Clicked: ${label}`);
  };

  return (
    <div className="goal-item" onClick={handleClick}>
      <span className="goal-label">{label}</span>
      <span className="goal-value">{value} {unit}</span>
      <div className="chart-container">
        <PieChart
          data={[
            { value: value, color: color },
            { value: goal - value, color: '#CCCCCC' },
          ]}
          lineWidth={15}
          paddingAngle={0}
          rounded
          startAngle={90}
          animate
        />
      </div>
    </div>
  );
};

const CaloriesWidget = () => (
    <div className="goal-widget-container">
      <div className="goal-widget" style={{ backgroundColor: 'lightblue' }}>
        <h2 className="widget-title">My Calories</h2>
        {[{ label: 'Carbs Intake:', value: 100, goal: 150, color: '#00853E', unit: 'g' },
          { label: 'Protein Intake:', value: 100, goal: 150, color: '#00853E', unit: 'g' }].map((item, index) => (
            <GoalItem
              key={index}
              label={item.label}
              value={item.value}
              unit={item.unit}
              goal={item.goal}
              color={item.color}
            />
        ))}
      </div>
    </div>
  );
  

export default CaloriesWidget;

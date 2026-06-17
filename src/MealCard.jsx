import React from 'react';

function MealCard(props) {
  return (
    <div className="meal-card">
      <h3 className="meal-title">{props.name}</h3>
      <div className="meal-info">
        <p className="meal-calories">🔥 {props.calories} cal</p>
        <p className="meal-price">💰 ${props.price}</p>
      </div>
      <input 
        type="text" 
        className="meal-input" 
        placeholder="Add special notes..." 
      />
    </div>
  );
}
//مكوّن الـ MealCard هو "الآلة الطابعة" يلي بتستلم الأمر وبتحوله لـ نصوص، وإيموجيات، وصناديق كتابة (Output) حقيقية بيشوفها ويلمسها المستخدم على المتصفح.//
export default MealCard;
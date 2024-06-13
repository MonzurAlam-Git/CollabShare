import React from "react";

const UseCase = ({ x }) => {
  // eslint-disable-next-line react/prop-types
  const { id, img, title, description } = x;
  return (
    <div className="card  bg-base-100 shadow-xl ">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl h-48 w-56" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="card-actions">
          <button className="btn btn-accent">Explore</button>
        </div>
      </div>
    </div>
  );
};

export default UseCase;

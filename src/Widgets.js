import React from "react";
import "./Widgets.css";
import InfoIcon from "@mui/icons-material/Info";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
function Widgets() {
  //function that returns jsx for the news
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn news </h2>

        <InfoIcon />
      </div>
      {newsArticle("This is the news", "Top news- 9,099 readers")}
      {newsArticle(
        "Do we have a failure to communicate?",
        "Top news- 6,662 readers"
      )}
      {newsArticle(
        "Fed signals interest-rate liftoff",
        "Top news- 14,156 readers"
      )}
      {newsArticle(
        "SmileDirectClub to shrink footprint",
        "Top news- 7,894 readers"
      )}
      {newsArticle(
        "Justice Stephen Breyer to retire",
        "Top news- 8,894 readers"
      )}
      {newsArticle("US home sales hit another high", "Top news- 8,894 readers")}
    </div>
  );
}

export default Widgets;

import React from "react";
import { BlogDiv } from "../styled-components/pages/blog";
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function intersperse(arr, sep) {
  if (arr.length === 0) {
    return [];
  }

  return arr.slice(1).reduce(
    function (xs, x, i) {
      return xs.concat([sep, x]);
    },
    [arr[0]]
  );
}

export default function (blogData) {
  return blogData.map((a, ai) => {
    let author =
      a.author == "On behalf of Nelson, Rozier, & Christenson"
        ? a.author
        : "by " + a.author;
    let date = new Date(a.date);
    let year = date.getFullYear();
    let day = date.getDate();
    let month = months[date.getMonth()];
    let zeromonth = date.getMonth() + 1;
    zeromonth = zeromonth > 9 ? zeromonth : "0" + zeromonth;
    let titledashed = a.title
      .toLowerCase()
      .replace(/[^\w\s]/gi, "")
      .split(" ")
      .join("-");
    return (
      <BlogDiv key={ai}>
        <a href={`/blog/${year}/${zeromonth}/${titledashed}`}>
          <h2>{a.title}</h2>
        </a>
        <p>
          <a href="/">{author}</a> | {month} {day}, {year} |{" "}
          {intersperse(
            a.categories.map((b, bi) => (
              <a
                key={bi}
                href={`/blog/category/${b.toLowerCase().split(" ").join("-")}`}
              >
                {b}
              </a>
            )),
            ", "
          )}
        </p>
        <p className="ellipsisContent">{a.blurb}</p>
        <a href={a.link}>read more</a>
      </BlogDiv>
    );
  });
}

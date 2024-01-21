import { List, ListItem, SkeletonText } from "@chakra-ui/react";
import React from "react";

const GenreListSkeleton = () => {
  return (
    <List>
      <ListItem>
        <SkeletonText />
      </ListItem>
    </List>
  );
};

export default GenreListSkeleton;

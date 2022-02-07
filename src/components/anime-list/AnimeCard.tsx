import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { IAnimeCard } from "../../helpers/types";
//@ts-ignore
import ReactHtmlParser from "react-html-parser";
type Props = {
  anime: IAnimeCard;
};

const AnimeCard = ({ anime }: Props) => {
  const { id, coverImage, title, description } = anime;
  return (
    <Link href="/anime/[id]" as={`/anime/${id}`}>
      <Card sx={{ width: "460px", height: "320px" }}>
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "50%",
              display: "inline-block",
              position: "relative",
            }}
            image={coverImage.large}
            alt={title.english ?? title.romaji}
          />
          <CardContent sx={{ display: "inline-block", flexWrap: "wrap" }}>
            <Typography gutterBottom variant="h5" component="span">
              {title.english ?? title.romaji}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              sx={{
                display: "-webkit-box",
                "-webkit-line-clamp": "7",
                "-webkit-box-orient": "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {ReactHtmlParser(description)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AnimeCard;

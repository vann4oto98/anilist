import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  Rating,
  CardActions,
} from "@mui/material";
import Link from "next/link";
import { IAnimeCard } from "../../helpers/types";
//@ts-ignore
import ReactHtmlParser from "react-html-parser";
import { useRouter } from "next/router";
type Props = {
  anime: IAnimeCard;
};

const AnimeCard = ({ anime }: Props) => {
  const { id, coverImage, title, description, meanScore } = anime;
  const router = useRouter();
  return (
    <Link
      href={{
        pathname: `anime/${id}`,
        query: { page: router.query?.page ?? 1 },
      }}
    >
      <Card sx={{ width: "460px", height: "320px" }}>
        <CardActionArea
          sx={{
            display: "flex",
            justifyContent: "start",
            alignItems: "flex-start",
            height: "100%",
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
            <Typography
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: "3",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
              gutterBottom
              variant="h5"
              component="span"
            >
              {title.english ?? title.romaji}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component="p"
              sx={{
                display: "-webkit-box",
                WebkitLineClamp: "5",
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {ReactHtmlParser(description)}
            </Typography>
            <CardActions
              sx={{
                position: "absolute",
                flexDirection: "column",
                alignItems: "baseline",
                bottom: "1px",
              }}
            >
              <Typography component="legend">User rating</Typography>
              <Rating name="User Rating" value={meanScore / 20} readOnly />
            </CardActions>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
};

export default AnimeCard;

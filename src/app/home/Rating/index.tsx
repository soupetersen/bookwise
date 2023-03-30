import { Rating, User } from "@prisma/client";
import { RatingContainer, RatingHeader, ReviewText } from "./styles";
import Image from "next/image";
import dayjs from "dayjs";
import ReactStars from "react-stars";

interface RatingProps {
  rating: Rating & {
    user: User;
  };
}

export function Rating({ rating }: RatingProps) {
  return (
    <RatingContainer>
      <RatingHeader>
        <div className="rating-author">
          <Image
            src={rating.user.avatar_url!}
            width={40}
            height={40}
            alt="review author photo"
          />
          <div className="author-info">
            <div>
              <h2>{rating.user.name}</h2>
              <p>{dayjs(rating.created_at).format("DD/MM/YYYY")}</p>
            </div>
          </div>
        </div>
        <div className="rating-stars">
          <ReactStars
            count={5}
            value={rating.rate}
            size={26}
            edit={false}
            color1="transparent"
            color2="#8381D9"
          />
        </div>
      </RatingHeader>
      <ReviewText>{rating.description}</ReviewText>
    </RatingContainer>
  );
}

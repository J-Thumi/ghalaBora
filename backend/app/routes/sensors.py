from fastapi import APIRouter

router = APIRouter(
   prefix="/users/sensors",
   tags=["Sensors"]
)

# TODO: Add this line in every crud operation on the sensors: "current_user: schemas.UserBase = Depends(oauth.get_current_user)"
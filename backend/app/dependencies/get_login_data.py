from app.schemas.users import LoginData
from fastapi import HTTPException, Request, status

async def get_login_data(request: Request):
   content_type = request.headers.get('content-type')

   if content_type == 'application/json':
      data = await request.json()
      try:
         login_request = LoginData(**data)
      except Exception:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Invalid JSON data"
         )
      
      return login_request
   
   elif content_type == 'application/x-www-form-urlencoded':
      form = await request.form()
      login_request = LoginData(username=form.get('username'), password=form.get('password'))

      if not login_request.username or not login_request.password:
         raise HTTPException(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Username and password are required"
         )
      return login_request
   
   else:
      raise HTTPException(
         status_code=status.HTTP_400_BAD_REQUEST,
         detail="Unsupported"
      )
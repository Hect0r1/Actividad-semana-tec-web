from pydantic import BaseModel
from typing import Optional


class ItemBase(BaseModel):
    title: str
    description: str | None = None


class ItemCreate(ItemBase):
    pass


class Item(ItemBase):
    id: int
    owner_id: int

    class Config:
        orm_mode = True


class UserBase(BaseModel):
    email: str


class UserCreate(UserBase):
    password: str
    github_user:Optional[str] = ""


class User(UserBase):
    id: int
    is_active: bool
    github_user: Optional[str] = ""
    items: list[Item] = []

    class Config:
        orm_mode = True

class UserActiveUpdate(UserBase):
    email: Optional[str] = None
    id: Optional[int] = None
    is_active: Optional[bool] = None
    github_user: Optional[str] = None
    items: Optional[list[Item]] = None

    class Config:
        orm_mode = True

class UserInDB(User):
    hashed_password: str

class Token(BaseModel):
    access_token: str
    token_type: str


class TokenData(BaseModel):
    email: str | None = None


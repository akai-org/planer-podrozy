"""Describes models used in the project"""
from typing import List, Union

from geoalchemy2 import Geography
from sqlalchemy import (
    Boolean,
    Column,
    DateTime,
    Float,
    ForeignKey,
    Index,
    Integer,
    String,
    Text,
    Time,
)
from sqlalchemy.orm import Mapped, mapped_column, relationship
from sqlalchemy.types import LargeBinary

from .databases import Base


class City(Base):
    """City model"""

    __tablename__ = "cities"

    id = Column(Integer, primary_key=True)
    country: Mapped[int] = Column(ForeignKey("countries.id"), nullable=False)
    route_points: Mapped[List["RoutePoint"]] = relationship()
    name = Column(String(86), nullable=False)


class Country(Base):
    """Country model"""

    __tablename__ = "countries"

    id = Column(Integer, primary_key=True)
    name = Column(String(56), nullable=False, unique=True)
    cities: Mapped[List["City"]] = relationship()


class RoutePoint(Base):
    """Route point model"""

    __tablename__ = "route_points"
    __tableargs__ = Index("rp_index", "route", "position", "day")

    id = Column(Integer, primary_key=True)
    route: Mapped[int] = mapped_column(ForeignKey("routes.id"))
    city: Mapped[int] = mapped_column(ForeignKey("cities.id"))
    restriction: Mapped[Union[int, None]] = mapped_column(
        ForeignKey("route_point_restrictions.id")
    )
    name = Column(String)
    coordinates = Column(Geography(geometry_type="POINT", srid=4326))
    photo: Mapped[int] = mapped_column(ForeignKey("images.id"))
    mark = Column(Float)
    description = Column(Text)
    position = Column(Integer, nullable=False)
    day = Column(Integer, nullable=False)
    route_point_restriction: Mapped["RoutePointRestriction"] = relationship(
        back_populates="route_point"
    )


class Image(Base):
    "Image model"
    __tablename__ = "images"

    id = Column(Integer, primary_key=True)
    content = Column(LargeBinary)
    routes: Mapped["Route"] = relationship()
    route_points: Mapped["RoutePoint"] = relationship()


class Route(Base):
    """Route model"""

    __tablename__ = "routes"

    id = Column(Integer, primary_key=True)
    creator: Mapped[int] = Column(ForeignKey("users.id"), nullable=False)
    name = Column(String, nullable=False)
    day_count = Column(Integer, default=1)
    begin_hour = Column(Time)
    end_hour = Column(Time)
    description = Column(Text)
    photo: Mapped[int] = mapped_column(ForeignKey("images.id"))
    is_public = Column(Boolean, default=False)
    is_calculated = Column(Boolean, default=False)
    route_points: Mapped[List["RoutePoint"]] = relationship()
    user_favourites: Mapped[List["UserFavourite"]] = relationship()


class RoutePointRestriction(Base):
    """Route point restriction model"""

    __tablename__ = "route_point_restrictions"

    id = Column(Integer, primary_key=True)
    begin_hour = Column(Time, nullable=False)
    end_hour = Column(Time, nullable=False)
    route: Mapped["RoutePoint"] = relationship(
        back_populates="route_points_restriction"
    )


class UserFavourite(Base):
    """User favourite model"""

    __tablename__ = "user_favourites"

    user: Mapped[int] = Column(ForeignKey("users.id"), primary_key=True)
    route: Mapped[int] = Column(ForeignKey("routes.id"), primary_key=True)
    favourite_date = Column(DateTime, nullable=False)

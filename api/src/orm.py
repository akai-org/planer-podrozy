from sqlalchemy import VARCHAR, Column, Integer, create_engine
from sqlalchemy.ext.declarative import declarative_base

# from sqlalchemy.orm import sessionmaker

Base = declarative_base()


class User(Base):
    __tablename__ = "Users"

    user_id = Column("user_id", Integer, primary_key=True)
    firstname = Column("firstname", VARCHAR)
    lastname = Column("lastname", VARCHAR)
    email = Column("email", VARCHAR)
    password = Column("password", VARCHAR)

    def __init__(self, user_id, firstname, lastname, email, password):
        self.user_id = user_id
        self.firstname = firstname
        self.lastname = lastname
        self.email = email
        self.password = password

    def __repr__(self):
        return f"Id: {self.user_id}, Name: {self.firstname} {self.lastname}, Email: {self.email}, Password: {self.password}"


engine = create_engine("sqlite:///users.db", echo=True)
Base.metadata.create_all(bind=engine)

# Session = sessionmaker(bind=engine)
# session = Session()
#
# user1 = User(1, "Adam", "Nowacki", "a_nowacki@gmail.com", "fj8913o")
# user2 = User(2, "Krzysztof", "Wysocki", "krzywy@o2.pl", "kdf0sa91")
# user3 = User(3, "Kamil", "Kowalski", "kowalski99@proton.com", "321$21da")
#
# session.add(user1)
# session.add(user2)
# session.add(user3)
# session.commit()
#
# result = session.query(User).all()
# for line in result:
#     print(line)

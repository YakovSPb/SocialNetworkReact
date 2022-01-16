import usersReducer, { actions, InitialState } from "./users-reducer";

let state: InitialState;

beforeEach(() => {
  state = {
    users: [
      {
        id: 0,
        name: "Dimych 0",
        followed: false,
        status: "status 1",
        photos: {
          small: null,
          large: null,
        }
      },
      {
        id: 1,
        name: "Dimych 1",
        followed: false,
        status: "status 1",
        photos: {
          small: null,
          large: null,
        }
      },
      {
        id: 2,
        name: "Dimych 0",
        followed: true,
        status: "status 1",
        photos: {
          small: null,
          large: null,
        }
      },
      {
        id: 3,
        name: "Dimych 0",
        followed: true,
        status: "status 1",
        photos: {
          small: null,
          large: null,
        }
      },
    ],
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
    pageSize: 5,
  };

})

test("follow success", () => {
  const newState = usersReducer(state, actions.followSuccess(1))

  //userReducer
  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});


test("unfollow success", () => {
  const newState = usersReducer(state, actions.unfollowSuccess(3))

  //userReducer
  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});

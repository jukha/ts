interface User {
  email: string;
  userId: number;
}

interface TakePhoto {
  cameraMode: string;
  filter: string;
  burst: number;
}

const user1: User = { email: "user@gmail.com", userId: 101 };

class Instagram implements TakePhoto {
  constructor(
    public cameraMode: string,
    public filter: string,
    public burst: number
  ) {}
}

export class Tokens {
  result: {
    token: {
      accessToken: string;
      refreshToken: string;
      expireIn: Date;
    },
    user: {
      email: string;
      id: string;
      firstName: string;
      lastName: string;
      role: string;
      status: string;
      createdAt: Date;
      lastLogin: Date;
      pendingSales: number;
      successfulSales: number;
    }
  }
}

import { GymsRepository } from "@/repositories/gyms-repository";

interface FetchNearbyGymsUseCaseRequest {
  userLatitude: number;
  userLongitude: number;
}

export class FetchNearbyGymsUseCase {
  constructor(private gymsRepository: GymsRepository) {}

  async execute({
    userLatitude,
    userLongitude,
  }: FetchNearbyGymsUseCaseRequest) {
    const gyms = await this.gymsRepository.findManyNearby({
      latitude: userLatitude,
      longitude: userLongitude,
    });
    return { gyms };
  }
}

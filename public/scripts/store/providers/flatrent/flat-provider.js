import { HttpHelper } from '../../utils/http-helper.js';
import { CRoom } from '../../domain/room.js';
import { dateToUnixStamp } from '../../../search.js';
export class FlatProvider {
    find(filter) {
        return HttpHelper.fetchAsJson(FlatProvider.apiUrl + '/?' +
            this.convertFilterToQueryString(filter))
            .then((response) => {
            this.assertIsValidResponse(response);
            return this.convertRoomListResponse(response);
        });
    }
    getByParams(checkInDate, checkOutDate, maxPrice) {
        return HttpHelper.fetchAsJson(`${FlatProvider.apiUrl}/?city='Санкт-Петербург'&checkInDate=${dateToUnixStamp(checkInDate)}&checkOutDate=${dateToUnixStamp(checkOutDate)}&priceLimit=${maxPrice}`)
            .then((response) => {
            this.assertIsValidResponse(response);
            return this.convertRoomResponse(response.items);
        });
    }
    assertIsValidResponse(response) {
        if (response.errorMessage !== null) {
            throw new Error(response.errorMessage);
        }
    }
    convertFilterToQueryString(filter) {
        return `checkInDate=${dateToUnixStamp(filter.checkInDate)}&checkOutDate=${dateToUnixStamp(filter.checkOutDate)}&priceLimit=${filter.maxPrice}`;
    }
    convertRoomListResponse(response) {
        return response.items.map(item => {
            return this.convertRoomResponse(item);
        });
    }
    convertRoomResponse(item) {
        return new CRoom(FlatProvider.provider, String(item.placeId), item.title, item.details, item.photos, item.coordinates, item.bookedDates, item.priceLimit);
    }
}
FlatProvider.provider = 'flat';
FlatProvider.apiUrl = 'http://localhost:3040';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmxhdC1wcm92aWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9zdG9yZS9wcm92aWRlcnMvZmxhdHJlbnQvZmxhdC1wcm92aWRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFPQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sNEJBQTRCLENBQUE7QUFDdkQsT0FBTyxFQUFFLEtBQUssRUFBRSxNQUFNLHNCQUFzQixDQUFBO0FBRTVDLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQTtBQUdwRCxNQUFNLE9BQU8sWUFBWTtJQU1oQixJQUFJLENBQUMsTUFBb0I7UUFDOUIsT0FBTyxVQUFVLENBQUMsV0FBVyxDQUUzQixZQUFZLENBQUMsTUFBTSxHQUFHLElBQUk7WUFFMUIsSUFBSSxDQUFDLDBCQUEwQixDQUFDLE1BQU0sQ0FBQyxDQUN4QzthQUNFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBQ2pCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUVwQyxPQUFPLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUMvQyxDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUFHTSxXQUFXLENBQ2hCLFdBQWlCLEVBQ2pCLFlBQWtCLEVBQ2xCLFFBQWlCO1FBRWpCLE9BQU8sVUFBVSxDQUFDLFdBQVcsQ0FFM0IsR0FBRyxZQUFZLENBQUMsTUFBTSx3Q0FBd0MsZUFBZSxDQUFDLFdBQVcsQ0FBQyxpQkFBaUIsZUFBZSxDQUFDLFlBQVksQ0FBQyxlQUFlLFFBQVEsRUFBRSxDQUVsSzthQUNFLElBQUksQ0FBQyxDQUFDLFFBQVEsRUFBRSxFQUFFO1lBRWpCLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxRQUFRLENBQUMsQ0FBQTtZQUVwQyxPQUFPLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUE7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBR08scUJBQXFCLENBQUMsUUFBMkI7UUFDdkQsSUFBSSxRQUFRLENBQUMsWUFBWSxLQUFLLElBQUksRUFBRTtZQUNsQyxNQUFNLElBQUksS0FBSyxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsQ0FBQTtTQUN2QztJQUNILENBQUM7SUFJTywwQkFBMEIsQ0FBQyxNQUFvQjtRQUNyRCxPQUFPLGVBQWUsZUFBZSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsaUJBQWlCLGVBQWUsQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLGVBQWUsTUFBTSxDQUFDLFFBQVEsRUFBRSxDQUFBO0lBQ2hKLENBQUM7SUFHTyx1QkFBdUIsQ0FBQyxRQUEyQjtRQUN6RCxPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxDQUFBO1FBQ3ZDLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUdPLG1CQUFtQixDQUFDLElBQUk7UUFDOUIsT0FBTyxJQUFJLEtBQUssQ0FDZCxZQUFZLENBQUMsUUFBUSxFQUNyQixNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUNwQixJQUFJLENBQUMsS0FBSyxFQUNWLElBQUksQ0FBQyxPQUFPLEVBQ1osSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsVUFBVSxDQUNoQixDQUFBO0lBQ0gsQ0FBQzs7QUFyRWEscUJBQVEsR0FBRyxNQUFNLENBQUE7QUFFaEIsbUJBQU0sR0FBRyx1QkFBdUIsQ0FBQSIsInNvdXJjZXNDb250ZW50IjpbIlxuXG5cblxuXG5pbXBvcnQgeyBQcm92aWRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9wcm92aWRlci5qcydcbmltcG9ydCB7IFNlYXJjaEZpbHRlciB9IGZyb20gJy4uLy4uL2RvbWFpbi9zZWFyY2gtZmlsdGVyLmpzJ1xuaW1wb3J0IHsgSHR0cEhlbHBlciB9IGZyb20gJy4uLy4uL3V0aWxzL2h0dHAtaGVscGVyLmpzJ1xuaW1wb3J0IHsgQ1Jvb20gfSBmcm9tICcuLi8uLi9kb21haW4vcm9vbS5qcydcbmltcG9ydCB7IElSb29tTGlzdFJlc3BvbnNlIH0gZnJvbSAnLi9yZXNwb25jZS5qcydcbmltcG9ydCB7IGRhdGVUb1VuaXhTdGFtcCB9IGZyb20gJy4uLy4uLy4uL3NlYXJjaC5qcydcblxuXG5leHBvcnQgY2xhc3MgRmxhdFByb3ZpZGVyIGltcGxlbWVudHMgUHJvdmlkZXIge1xuXG4gIHB1YmxpYyBzdGF0aWMgcHJvdmlkZXIgPSAnZmxhdCdcblxuICBwcml2YXRlIHN0YXRpYyBhcGlVcmwgPSAnaHR0cDovL2xvY2FsaG9zdDozMDQwJ1xuXG4gIHB1YmxpYyBmaW5kKGZpbHRlcjogU2VhcmNoRmlsdGVyKSB7XG4gICAgcmV0dXJuIEh0dHBIZWxwZXIuZmV0Y2hBc0pzb248SVJvb21MaXN0UmVzcG9uc2U+KFxuXG4gICAgICBGbGF0UHJvdmlkZXIuYXBpVXJsICsgJy8/JyArXG4gICAgICBcbiAgICAgIHRoaXMuY29udmVydEZpbHRlclRvUXVlcnlTdHJpbmcoZmlsdGVyKVxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuICAgICAgICB0aGlzLmFzc2VydElzVmFsaWRSZXNwb25zZShyZXNwb25zZSlcblxuICAgICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Um9vbUxpc3RSZXNwb25zZShyZXNwb25zZSlcbiAgICAgIH0pXG4gIH1cblxuXG4gIHB1YmxpYyBnZXRCeVBhcmFtcyhcbiAgICBjaGVja0luRGF0ZTogRGF0ZSwgXG4gICAgY2hlY2tPdXREYXRlOiBEYXRlLCBcbiAgICBtYXhQcmljZT86IG51bWJlclxuICApIHtcbiAgICByZXR1cm4gSHR0cEhlbHBlci5mZXRjaEFzSnNvbjxJUm9vbUxpc3RSZXNwb25zZT4oXG5cbiAgICAgIGAke0ZsYXRQcm92aWRlci5hcGlVcmx9Lz9jaXR5PSfQodCw0L3QutGCLdCf0LXRgtC10YDQsdGD0YDQsycmY2hlY2tJbkRhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tJbkRhdGUpfSZjaGVja091dERhdGU9JHtkYXRlVG9Vbml4U3RhbXAoY2hlY2tPdXREYXRlKX0mcHJpY2VMaW1pdD0ke21heFByaWNlfWBcblxuICAgIClcbiAgICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xuXG4gICAgICAgIHRoaXMuYXNzZXJ0SXNWYWxpZFJlc3BvbnNlKHJlc3BvbnNlKVxuXG4gICAgICAgIHJldHVybiB0aGlzLmNvbnZlcnRSb29tUmVzcG9uc2UocmVzcG9uc2UuaXRlbXMpXG4gICAgICB9KVxuICB9XG5cblxuICBwcml2YXRlIGFzc2VydElzVmFsaWRSZXNwb25zZShyZXNwb25zZTogSVJvb21MaXN0UmVzcG9uc2UpOiB2b2lkIHtcbiAgICBpZiAocmVzcG9uc2UuZXJyb3JNZXNzYWdlICE9PSBudWxsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IocmVzcG9uc2UuZXJyb3JNZXNzYWdlKVxuICAgIH1cbiAgfVxuXG5cblxuICBwcml2YXRlIGNvbnZlcnRGaWx0ZXJUb1F1ZXJ5U3RyaW5nKGZpbHRlcjogU2VhcmNoRmlsdGVyKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYGNoZWNrSW5EYXRlPSR7ZGF0ZVRvVW5peFN0YW1wKGZpbHRlci5jaGVja0luRGF0ZSl9JmNoZWNrT3V0RGF0ZT0ke2RhdGVUb1VuaXhTdGFtcChmaWx0ZXIuY2hlY2tPdXREYXRlKX0mcHJpY2VMaW1pdD0ke2ZpbHRlci5tYXhQcmljZX1gXG4gIH1cblxuXG4gIHByaXZhdGUgY29udmVydFJvb21MaXN0UmVzcG9uc2UocmVzcG9uc2U6IElSb29tTGlzdFJlc3BvbnNlKSA6IENSb29tW10ge1xuICAgIHJldHVybiByZXNwb25zZS5pdGVtcy5tYXAoaXRlbSA9PiB7XG4gICAgICByZXR1cm4gdGhpcy5jb252ZXJ0Um9vbVJlc3BvbnNlKGl0ZW0pXG4gICAgfSlcbiAgfVxuXG5cbiAgcHJpdmF0ZSBjb252ZXJ0Um9vbVJlc3BvbnNlKGl0ZW0pIHtcbiAgICByZXR1cm4gbmV3IENSb29tKFxuICAgICAgRmxhdFByb3ZpZGVyLnByb3ZpZGVyLFxuICAgICAgU3RyaW5nKGl0ZW0ucGxhY2VJZCksXG4gICAgICBpdGVtLnRpdGxlLFxuICAgICAgaXRlbS5kZXRhaWxzLFxuICAgICAgaXRlbS5waG90b3MsXG4gICAgICBpdGVtLmNvb3JkaW5hdGVzLFxuICAgICAgaXRlbS5ib29rZWREYXRlcyxcbiAgICAgIGl0ZW0ucHJpY2VMaW1pdFxuICAgIClcbiAgfVxufSJdfQ==
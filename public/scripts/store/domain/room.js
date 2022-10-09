export class CRoom {
    constructor(provider, originalId, placeId, name, description, image, remoteness, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.placeId = placeId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
export class FRoom {
    constructor(provider, originalId, placeId, name, description, image, remoteness, bookedDates, price) {
        this.provider = provider;
        this.originalId = originalId;
        this.placeId = placeId;
        this.name = name;
        this.description = description;
        this.image = image;
        this.remoteness = remoteness;
        this.bookedDates = bookedDates;
        this.price = price;
    }
    get id() {
        return this.provider + '-' + this.originalId;
    }
    isProvidedBy(providerName) {
        return this.provider === providerName;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9vbS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9zdG9yZS9kb21haW4vcm9vbS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFHQSxNQUFNLE9BQU8sS0FBSztJQUdoQixZQUNtQixRQUFnQixFQUNqQixVQUFrQixFQUMzQixPQUFXLEVBQ1gsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLEtBQWEsRUFDYixVQUFtQixFQUduQixXQUFnQixFQUNoQixLQUFjO1FBVkosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVM7UUFHbkIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUVwQixDQUFDO0lBSUosSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzlDLENBQUM7SUFHTSxZQUFZLENBQUMsWUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQTtJQUN2QyxDQUFDO0NBQ0Y7QUFLRCxNQUFNLE9BQU8sS0FBSztJQUdoQixZQUNtQixRQUFnQixFQUNqQixVQUFrQixFQUMzQixPQUFXLEVBQ1gsSUFBWSxFQUNaLFdBQW1CLEVBQ25CLEtBQWEsRUFDYixVQUFrQixFQUdsQixXQUFnQixFQUNoQixLQUFjO1FBVkosYUFBUSxHQUFSLFFBQVEsQ0FBUTtRQUNqQixlQUFVLEdBQVYsVUFBVSxDQUFRO1FBQzNCLFlBQU8sR0FBUCxPQUFPLENBQUk7UUFDWCxTQUFJLEdBQUosSUFBSSxDQUFRO1FBQ1osZ0JBQVcsR0FBWCxXQUFXLENBQVE7UUFDbkIsVUFBSyxHQUFMLEtBQUssQ0FBUTtRQUNiLGVBQVUsR0FBVixVQUFVLENBQVE7UUFHbEIsZ0JBQVcsR0FBWCxXQUFXLENBQUs7UUFDaEIsVUFBSyxHQUFMLEtBQUssQ0FBUztJQUVwQixDQUFDO0lBSUosSUFBSSxFQUFFO1FBQ0osT0FBTyxJQUFJLENBQUMsUUFBUSxHQUFHLEdBQUcsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFBO0lBQzlDLENBQUM7SUFHTSxZQUFZLENBQUMsWUFBb0I7UUFDdEMsT0FBTyxJQUFJLENBQUMsUUFBUSxLQUFLLFlBQVksQ0FBQTtJQUN2QyxDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IElkIH0gZnJvbSAnLi4vLi4vdHlwZXMuanMnXG5cbmV4cG9ydCBjbGFzcyBDUm9vbSB7XG5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBwcml2YXRlIHJlYWRvbmx5IHByb3ZpZGVyOiBzdHJpbmcsXG4gICAgcHVibGljIHJlYWRvbmx5IG9yaWdpbmFsSWQ6IHN0cmluZyxcbiAgICBwdWJsaWMgcGxhY2VJZDogSWQsXG4gICAgcHVibGljIG5hbWU6IHN0cmluZyxcbiAgICBwdWJsaWMgZGVzY3JpcHRpb246IHN0cmluZyxcbiAgICBwdWJsaWMgaW1hZ2U6IHN0cmluZyxcbiAgICBwdWJsaWMgcmVtb3RlbmVzcz86IG51bWJlcixcbiAgICBcbiAgICBcbiAgICBwdWJsaWMgYm9va2VkRGF0ZXM/OiBbXSxcbiAgICBwdWJsaWMgcHJpY2U/OiBudW1iZXIsXG4gICAgXG4gICkge31cblxuXG5cbiAgZ2V0IGlkICgpOiBJZCB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgKyAnLScgKyB0aGlzLm9yaWdpbmFsSWRcbiAgfVxuXG5cbiAgcHVibGljIGlzUHJvdmlkZWRCeShwcm92aWRlck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyID09PSBwcm92aWRlck5hbWVcbiAgfVxufVxuXG5cblxuXG5leHBvcnQgY2xhc3MgRlJvb20ge1xuXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByZWFkb25seSBwcm92aWRlcjogc3RyaW5nLFxuICAgIHB1YmxpYyByZWFkb25seSBvcmlnaW5hbElkOiBzdHJpbmcsXG4gICAgcHVibGljIHBsYWNlSWQ6IElkLFxuICAgIHB1YmxpYyBuYW1lOiBzdHJpbmcsXG4gICAgcHVibGljIGRlc2NyaXB0aW9uOiBzdHJpbmcsXG4gICAgcHVibGljIGltYWdlOiBzdHJpbmcsXG4gICAgcHVibGljIHJlbW90ZW5lc3M6IG51bWJlcixcbiAgICBcbiAgICBcbiAgICBwdWJsaWMgYm9va2VkRGF0ZXM/OiBbXSxcbiAgICBwdWJsaWMgcHJpY2U/OiBudW1iZXIsXG4gICAgXG4gICkge31cblxuXG5cbiAgZ2V0IGlkICgpOiBJZCB7XG4gICAgcmV0dXJuIHRoaXMucHJvdmlkZXIgKyAnLScgKyB0aGlzLm9yaWdpbmFsSWRcbiAgfVxuXG5cbiAgcHVibGljIGlzUHJvdmlkZWRCeShwcm92aWRlck5hbWU6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLnByb3ZpZGVyID09PSBwcm92aWRlck5hbWVcbiAgfVxufSJdfQ==
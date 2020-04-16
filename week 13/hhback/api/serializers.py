from rest_framework import serializers
from api.models import Category

class CategorySerializers(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    name = serializers.CharField()

    def create(self, validated_data):
        category = Category.objects.create(name=validated_data.get('name'))
        return category

    def update(self, instance, validated_data):
        instance.name = validated_data.get('name', instance.name)
        instance.save()
        return instance

class CategorySerializer2(serializers.ModelSerializer):
    # name = serializers.CharField(max_length=200)

    class Meta:
        model = Category
        fields = ('id', 'name')
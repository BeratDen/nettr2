from rest_framework import serializers
from ..models import Product, Category, Actor


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = ['pk', 'name']


class ActorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = ['pk', 'name']


class ProductSerializer(serializers.ModelSerializer):

    category = CategorySerializer(many=True)
    actor = ActorSerializer(many=True)

    class Meta:
        model = Product
        fields = '__all__'

    def update(self, instance, validated_data):
        categories_data = validated_data.pop('category')
        actors_data = validated_data.pop('actor')
        instance = super(ProductSerializer, self).update(
            instance, validated_data)

        for category_data in categories_data:

            category_qs = Category.objects.filter(
                name__iexact=category_data['name'])

            if category_qs.exists():
                category = category_qs.first()
            else:
                raise "Error"

            instance.category.add(category)

        for actor_data in actors_data:
            actor_qs = Actor.objects.filter(name__iexact=actor_data['name'])
            if actor_qs.exists():
                actor = actor_qs.first()
            else:
                raise "Error"

            instance.actor.add(actor)

        return instance


class ProductCreateSerializer(serializers.ModelSerializer):
    category = CategorySerializer(many=True, read_only=True)
    actor = ActorSerializer(many=True, read_only=True)

    class Meta:
        model = Product
        fields = '__all__'


class CategorySerializer(serializers.ModelSerializer):

    class Meta:
        model = Category
        fields = '__all__'


class ActorSerializer(serializers.ModelSerializer):

    class Meta:
        model = Actor
        fields = '__all__'

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

    def create(self, validated_data):
        instance = Product.objects.create(**validated_data)
        categories_data = validated_data.pop('category')
        actors_data = validated_data.pop('actor')

        category_list = []
        actor_list = []

        for category_data in categories_data:

            category_qs = Category.objects.filter(
                name__iexact=category_data['name'])

            for category in category_qs.iterator():
                instance.add(category)

        for actor_data in actors_data:

            actor_qs = Actor.objects.filter(name__iexact=actor_data['name'])
            for actor in actor_qs.iterator():
                instance.add(actor)

        return instance

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

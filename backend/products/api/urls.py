from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import ProductViewSet, ProductCreateViewSet, CategoryViewSet, ActorViewSet

router = DefaultRouter()
router.register(r'products', ProductViewSet, basename='products')
router.register(r'product/create', ProductCreateViewSet,
                basename='product/create')
router.register(r'categories', CategoryViewSet, basename='categories')
router.register(r'actors', ActorViewSet, basename='actors')

urlpatterns = [
    path('', include(router.urls)),
]

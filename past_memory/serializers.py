from .models import Picture, Resume, Skill, Education, Experience
from rest_framework import serializers
from accounts.serializers import UserDetailsSerializer
from django.contrib.auth.models import User
from django.utils import translation


class SkillSerializer(serializers.ModelSerializer):
    class Meta:
        model = Skill
        fields = ('id', 'name', 'point', "image")


class MusicSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'name', 'music')


class EducationSerializer(serializers.ModelSerializer):
    class Meta:
        model = Education
        fields = ('id', 'grade', 'major', 'university',
                  'website', 'Article_names')


class ExperienceSerializer(serializers.ModelSerializer):
    class Meta:
        model = Experience
        fields = ('id', 'company_name', 'work_from',
                  'work_to', 'duties_and_achivements', 'website', 'about_company', "image")
        depth = 0  # we can set this to get all realation


class PictureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Picture
        fields = ('__all__')


class ResumeSerializer(serializers.ModelSerializer):
    pictures = serializers.SerializerMethodField()
    skills = serializers.SerializerMethodField()
    educations = serializers.SerializerMethodField()
    musics = serializers.SerializerMethodField()
    user = UserDetailsSerializer(read_only=True)

    experiences = serializers.SerializerMethodField()

    class Meta:
        model = Resume
        fields = ('id', 'name',
                  'abstract', 'introduce', 'lang', 'pictures', 'skills', 'experiences', 'educations', 'user', 'musics')

    def get_pictures(self, obj):
        queryset = obj.picture_set.all()
        serializer = PictureSerializer(queryset, many=True)
        return serializer.data

    def get_skills(self, obj):
        queryset = obj.skill_set.all()
        serializer = SkillSerializer(queryset, many=True)
        return serializer.data

    def get_educations(self, obj):
        queryset = obj.education_set.all()
        serializer = EducationSerializer(queryset, many=True)
        return serializer.data

    def get_experiences(self, obj):
        queryset = obj.experience_set.all()
        serializer = ExperienceSerializer(queryset, many=True)
        return serializer.data

    def get_musics(self, obj):
        queryset = obj.music_set.all()
        serializer = MusicSerializer(queryset, many=True)
        return serializer.data
